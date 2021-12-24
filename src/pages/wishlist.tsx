import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';
import { initializeApollo } from 'utils/apollo';
import { GetRecommended } from 'graphql/generated/GetRecommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import { GET_RECOMMENDED } from 'graphql/queries/recommended';
import protectedRoutes from 'utils/protected-routes';
import { GetServerSidePropsContext } from 'next';

export default function WishlistPage(props: WishlistTemplateProps) {
	return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await protectedRoutes(context);
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query<GetRecommended>({ query: GET_RECOMMENDED });

	return {
		props: {
			session,
			games: gamesMock,
			recommendedGames: gamesMapper(data.recommended?.section?.games),
			recommendedHighlight: highlightMapper(data.recommended?.section?.highlight),
			recommendedTitle: data.recommended?.section?.title
		}
	};
}
