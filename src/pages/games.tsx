import GamesTemplate, { GamesTemplateProps } from 'templates/Games';
import { initializeApollo } from 'utils/apollo';
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames';
import { GET_GAMES } from 'graphql/queries/games';
import { parseQueryStringToWhere } from 'utils/filter';
import { genreFields, platformFields, priceFields, sortFields } from 'utils/filter/fields';
import { GetServerSidePropsContext } from 'next';

export default function GamesPage(props: GamesTemplateProps) {
	return <GamesTemplate {...props} />;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
	const apolloClient = initializeApollo();

	const filterPrice = {
		title: 'Price',
		name: 'price_lte',
		type: 'radio',
		fields: priceFields
	};

	const filterPlatforms = {
		title: 'Platforms',
		name: 'platforms',
		type: 'checkbox',
		fields: platformFields
	};

	const filterSort = {
		title: 'Sort by price',
		name: 'sort',
		type: 'radio',
		fields: sortFields
	};

	const filterCategories = {
		title: 'Genres',
		name: 'categories',
		type: 'checkbox',
		fields: genreFields
	};

	const filterItems = [filterSort, filterPrice, filterPlatforms, filterCategories];

	await apolloClient.query<GetGames, GetGamesVariables>({
		query: GET_GAMES,
		variables: {
			limit: 12,
			where: parseQueryStringToWhere({ queryString: query, filterItems }),
			sort: query.sort as string | null
		}
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			filterItems
		}
	};
}
