import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
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

    const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

    return {
        props: {
            revalidate: 60,
            banners: data.banners.map((banner) => ({
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
            newGames: data.newGames.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price
            })),
            mostPopularHighlight: highlightMock,
            mostPopularGames: gamesMock,
            upcomingGames: data.upcomingGames.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price
            })),
            upcomingHighlight: highlightMock,
            upcomingMoreGames: gamesMock,
            freeGames: data.freeGames.map((game) => ({
                slug: game.slug,
                title: game.name,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price
            })),
            freeHighlight: highlightMock
        }
    };
}

// {
//     slug: 'Zork',
//     title: 'Zork',
//     developer: 'Rockstar Games',
//     img: 'https://source.unsplash.com/user/willianjusten/300x140',
//     price: 235,
//     promotionalPrice: 215
// }
