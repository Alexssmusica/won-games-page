import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';
import { initializeApollo } from '../utils/apollo';
import { GetRecommended } from '../graphql/generated/GetRecommended';
import { gamesMapper, highlightMapper } from '../utils/mappers';
import { GET_RECOMMENDED } from '../graphql/queries/recommended';

export default function WishlistPage(props: WishlistTemplateProps) {
    return <Wishlist {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<GetRecommended>({ query: GET_RECOMMENDED });

    return {
        props: {
            games: gamesMock,
            recommendedGames: gamesMapper(data.recommended?.section?.games),
            recommendedHighlight: highlightMapper(data.recommended?.section?.highlight),
            recommendedTitle: data.recommended?.section?.title
        }
    };
}
