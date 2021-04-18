import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import Home, { HomeTemaplateProps } from '../templates/Home';

export default function Index(props: HomeTemaplateProps) {
    return <Home {...props} />;
}

export function getServerSideProps() {
    return {
        props: {
            banners: bannersMock,
            newGames: gamesMock,
            mostPopularHighlight: highlightMock,
            mostPopularGames: gamesMock,
            upcommingGames: gamesMock,
            upcommingHighligth: highlightMock,
            upcommingMoreGames: gamesMock,
            freeGames: gamesMock,
            freeHighligth: highlightMock
        }
    };
}
