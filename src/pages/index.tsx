import { QueryHome, QueryHomeVariables } from '../graphql/generated/QueryHome';
import { QUERY_HOME } from '../graphql/home';
import Home, { HomeTemplateProps } from '../templates/Home';
import { initializeApollo } from '../utils/apollo';
import { toDay } from '../utils/formatDate';
import { bannerMapper, gamesMapper, highlightMapper } from '../utils/mappers';

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />;
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const {
        data: { banners, newGames, upcomingGames, freeGames, sections }
    } = await apolloClient.query<QueryHome, QueryHomeVariables>({
        query: QUERY_HOME,
        variables: { date: toDay() }
    });

    return {
        props: {
            revalidate: 60,
            banners: bannerMapper(banners),
            newGames: gamesMapper(newGames),
            newGamesTitle: sections?.newGames?.title,
            mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
            mostPopularGames: gamesMapper(sections!.popularGames!.games),
            mostPopularGamesTitle: sections?.popularGames?.title,
            upcomingGames: gamesMapper(upcomingGames),
            upcomingGamesTitle: sections?.upcomingGames?.title,
            upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
            freeGames: gamesMapper(freeGames),
            freeGamesTitle: sections?.freeGames?.title,
            freeHighlight: highlightMapper(sections?.freeGames?.highlight)
        }
    };
}
