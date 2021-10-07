import GamesTemplate, { GamesTemplateProps } from 'templates/Games';
import filterItemsMock from 'components/ExploreSidebar/mock';
import { initializeApollo } from '../utils/apollo';
import { GET_GAMES } from '../graphql/games';
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames';

export default function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<GetGames, GetGamesVariables>({
        query: GET_GAMES,
        variables: { limit: 9 }
    });

    return {
        props: {
            revalidate: 60,
            games: data.games.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover!.url}`,
                price: game.price
            })),
            filterItems: filterItemsMock
        }
    };
}
