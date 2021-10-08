import GamesTemplate, { GamesTemplateProps } from 'templates/Games';
import filterItemsMock from 'components/ExploreSidebar/mock';
import { initializeApollo } from '../utils/apollo';
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames';
import { GET_GAMES } from '../graphql/queries/games';

export default function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    await apolloClient.query<GetGames, GetGamesVariables>({
        query: GET_GAMES,
        variables: { limit: 12 }
    });

    return {
        props: {
            revalidate: 60,
            initialApolloState: apolloClient.cache.extract(),
            filterItems: filterItemsMock
        }
    };
}
