import { useRouter } from 'next/router';

import Game, { GameTemplateProps } from 'templates/Game';
import { GetGameBySlug, GetGameBySlugVariables } from 'graphql/generated/GetGameBySlug';
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames';
import { initializeApollo } from 'utils/apollo';

import { GetStaticProps } from 'next';
import { GET_RECOMMENDED } from 'graphql/queries/recommended';
import { GetRecommended } from 'graphql/generated/GetRecommended';
import { GET_GAMES, GET_GAME_BY_SLUG } from 'graphql/queries/games';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import { GetUpcoming, GetUpcomingVariables } from 'graphql/generated/GetUpcoming';
import { GET_UPCOMING } from 'graphql/queries/upcoming';
import { toDay } from 'utils/formatDate';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
	const router = useRouter();

	if (router.isFallback) return null;

	return <Game {...props} />;
}

export async function getStaticPaths() {
	const { data } = await apolloClient.query<GetGames, GetGamesVariables>({
		query: GET_GAMES,
		variables: { limit: 9 }
	});

	const paths = data.games.map(({ slug }) => ({
		params: { slug }
	}));

	return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	// Get game data
	const { data } = await apolloClient.query<GetGameBySlug, GetGameBySlugVariables>({
		query: GET_GAME_BY_SLUG,
		variables: { slug: `${params?.slug}` },
		fetchPolicy: 'no-cache'
	});

	if (!data.games.length) {
		return { notFound: true };
	}

	const game = data.games[0];

	// get recommended games
	const { data: recommendedGamesSection } = await apolloClient.query<GetRecommended>({ query: GET_RECOMMENDED });

	// get upcoming games
	const { data: upcomingGamesSection } = await apolloClient.query<GetUpcoming, GetUpcomingVariables>({
		query: GET_UPCOMING,
		variables: { date: toDay() }
	});

	return {
		revalidate: 60,
		props: {
			cover: `http://localhost:1337${game.cover?.src}`,
			gameInfo: {
				title: game.name,
				price: game.price,
				description: game.short_description
			},

			gallery: game.gallery.map((image) => ({
				src: `http://localhost:1337${image.src}`,
				label: image.label
			})),
			description: game.description,
			details: {
				developer: game.developers[0].name,
				releaseDate: game.release_date,
				platforms: game.platforms.map((platform) => platform.name),
				publisher: game.publisher?.name,
				rating: game.rating,
				genres: game.categories.map((category) => category.name)
			},
			upcomingTitle: upcomingGamesSection.showcase?.upcomingGames?.title,
			upcomingGames: gamesMapper(upcomingGamesSection.upcomingGames),
			upcomingHighlight: highlightMapper(upcomingGamesSection.showcase?.upcomingGames?.highlight),
			recommendedTitle: recommendedGamesSection.recommended?.section?.title,
			recommendedGames: gamesMapper(recommendedGamesSection.recommended?.section?.games)
		}
	};
};
