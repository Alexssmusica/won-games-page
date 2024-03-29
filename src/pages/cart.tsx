import { GetServerSidePropsContext } from 'next';
import Cart, { CartProps } from 'templates/Cart';
import { GetRecommended } from 'graphql/generated/GetRecommended';
import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import { GET_RECOMMENDED } from 'graphql/queries/recommended';
import protectedRoutes from 'utils/protected-routes';

export default function CartPage(props: CartProps) {
	return <Cart {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await protectedRoutes(context);
	const apolloClient = initializeApollo(null, session);

	const { data } = await apolloClient.query<GetRecommended>({ query: GET_RECOMMENDED });

	return {
		props: {
			session,
			recommendedTitle: data.recommended?.section?.title,
			recommendedGames: gamesMapper(data.recommended?.section?.games),
			recommendedHighlight: highlightMapper(data.recommended?.section?.highlight)
		}
	};
}
