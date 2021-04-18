import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import Highlight, { HighlightProps } from 'components/Highlight';
import Menu from 'components/Menu';
import * as Style from './styles';

export type HomeTemaplateProps = {
    banners: BannerProps[];
    newGames: GameCardProps[];
    mostPopularHighlight: HighlightProps;
    mostPopularGames: GameCardProps[];
    upcommingGames: GameCardProps[];
    upcommingHighligth: HighlightProps;
    upcommingMoreGames: GameCardProps[];
    freeGames: GameCardProps[];
    freeHighligth: HighlightProps;
};

const Home = ({
    banners,
    newGames,
    mostPopularHighlight,
    mostPopularGames,
    upcommingGames,
    upcommingHighligth,
    upcommingMoreGames,
    freeGames,
    freeHighligth
}: HomeTemaplateProps) => (
    <section>
        <Container>
            <Menu />
            <Style.SectionBanner>
                <BannerSlider items={banners} />
            </Style.SectionBanner>
        </Container>

        <Style.SectionNews>
            <Container>
                <Heading lineLeft lineColor="secondary">
                    News
                </Heading>

                <GameCardSlider items={newGames} color="black" />
            </Container>
        </Style.SectionNews>

        <Container>
            <Style.SectionMostPopular>
                <Heading lineLeft lineColor="secondary">
                    Most Popular
                </Heading>
                <Highlight {...mostPopularHighlight} />
                <GameCardSlider items={mostPopularGames} />
            </Style.SectionMostPopular>

            <Style.SectionUpcoming>
                <Heading lineLeft lineColor="secondary">
                    Upcomming
                </Heading>
                <GameCardSlider items={upcommingGames} />
                <Highlight {...upcommingHighligth} />
                <GameCardSlider items={upcommingMoreGames} />
            </Style.SectionUpcoming>

            <Style.SectionFreeGames>
                <Heading lineLeft lineColor="secondary">
                    Free Games
                </Heading>
                <Highlight {...freeHighligth} />
                <GameCardSlider items={freeGames} />
            </Style.SectionFreeGames>
        </Container>

        <Style.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </Style.SectionFooter>
    </section>
);

export default Home;
