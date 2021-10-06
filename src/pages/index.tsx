import { QueryHome } from '../graphql/generated/QueryHome';
import { QUERY_HOME } from '../graphql/home';
import Home, { HomeTemplateProps } from '../templates/Home';
import { initializeApollo } from '../utils/apollo';

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
    } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

    return {
        props: {
            revalidate: 60,
            banners: banners.map((banner) => ({
                img: `http://localhost:1337${banner.image?.url}`,
                title: banner.title,
                subtitle: banner.subtitle,
                buttonLabel: banner.button?.label,
                buttonLink: banner.button?.link,
                ...(banner.ribbon && {
                    ribbon: banner.ribbon.text,
                    ribbonColor: banner.ribbon.color,
                    ribbonSize: banner.ribbon.size
                })
            })),
            newGames: newGames.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price
            })),
            newGamesTitle: sections?.newGames?.title,
            mostPopularHighlight: {
                title: sections?.popularGames?.highlight?.title,
                subtitle: sections?.popularGames?.highlight?.subtitle,
                backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
                floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
                buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
                alignment: sections?.popularGames?.highlight?.alignment,
                buttonLink: sections?.popularGames?.highlight?.buttonLink
            },
            mostPopularGames: sections!.popularGames!.games.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price
            })),
            mostPopularGamesTitle: sections?.popularGames?.title,
            upcomingGames: upcomingGames.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price
            })),
            upcomingGamesTitle: sections?.upcomingGames?.title,
            upcomingHighlight: {
                title: sections?.upcomingGames?.highlight?.title,
                subtitle: sections?.upcomingGames?.highlight?.subtitle,
                backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`,
                floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage?.url}`,
                buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
                alignment: sections?.upcomingGames?.highlight?.alignment,
                buttonLink: sections?.upcomingGames?.highlight?.buttonLink
            },
            freeGames: freeGames.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price
            })),
            freeGamesTitle: sections?.freeGames?.title,
            freeHighlight: {
                title: sections?.freeGames?.highlight?.title,
                subtitle: sections?.freeGames?.highlight?.subtitle,
                backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
                floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage?.url}`,
                buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
                alignment: sections?.freeGames?.highlight?.alignment,
                buttonLink: sections?.freeGames?.highlight?.buttonLink
            }
        }
    };
}
