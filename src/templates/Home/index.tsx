import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';
import * as Style from './styles';

export type HomeTemplateProps = {
	banners: BannerProps[];
	newGames: GameCardProps[];
	mostPopularHighlight: HighlightProps;
	mostPopularGames: GameCardProps[];
	upcomingGames: GameCardProps[];
	upcomingHighlight: HighlightProps;
	freeGames: GameCardProps[];
	freeHighlight: HighlightProps;
	newGamesTitle: string;
	mostPopularGamesTitle: string;
	upcomingGamesTitle: string;
	freeGamesTitle: string;
};

const Home = ({
	banners,
	newGames,
	mostPopularHighlight,
	mostPopularGames,
	upcomingGames,
	upcomingHighlight,
	freeGames,
	freeHighlight,
	newGamesTitle,
	mostPopularGamesTitle,
	upcomingGamesTitle,
	freeGamesTitle
}: HomeTemplateProps) => (
	<Base>
		<Container>
			<Style.SectionBanner>
				<BannerSlider items={banners} />
			</Style.SectionBanner>
		</Container>

		<Style.SectionNews>
			<Showcase title={newGamesTitle} games={newGames} color="black" />
		</Style.SectionNews>

		<Showcase title={mostPopularGamesTitle} highlight={mostPopularHighlight} games={mostPopularGames} />

		<Showcase title={upcomingGamesTitle} games={upcomingGames} highlight={upcomingHighlight} />

		<Showcase title={freeGamesTitle} highlight={freeHighlight} games={freeGames} />
	</Base>
);

export default Home;
