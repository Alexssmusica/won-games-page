import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Menu from 'components/Menu';
import Showcase from '../../components/Showcase';
import * as Style from './styles';

export type HomeTemplateProps = {
    banners: BannerProps[];
    newGames: GameCardProps[];
    mostPopularHighlight: HighlightProps;
    mostPopularGames: GameCardProps[];
    upcomingGames: GameCardProps[];
    upcomingHighlight: HighlightProps;
    upcomingMoreGames: GameCardProps[];
    freeGames: GameCardProps[];
    freeHighlight: HighlightProps;
};

const Home = ({
    banners,
    newGames,
    mostPopularHighlight,
    mostPopularGames,
    upcomingGames,
    upcomingHighlight,
    upcomingMoreGames,
    freeGames,
    freeHighlight
}: HomeTemplateProps) => (
    <section>
        <Container>
            <Menu />
            <Style.SectionBanner>
                <BannerSlider items={banners} />
            </Style.SectionBanner>
        </Container>

        <Style.SectionNews>
            <Showcase title="News" games={newGames} />
        </Style.SectionNews>

        <Showcase title="Most Popular" highlight={mostPopularHighlight} games={mostPopularGames} />

        <Style.SectionUpcoming>
            <Showcase title="Upcoming" games={upcomingGames} />
            <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
        </Style.SectionUpcoming>

        <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />

        <Style.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </Style.SectionFooter>
    </section>
);

export default Home;
