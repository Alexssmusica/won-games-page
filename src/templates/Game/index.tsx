import { NextSeo } from 'next-seo';
import Image from 'next/image';

import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import Gallery, { GalleryImageProps } from 'components/Gallery';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import { HighlightProps } from 'components/Highlight';
import { GameCardProps } from 'components/GameCard';
import { Divider } from 'components/Divider';
import Showcase from 'components/Showcase';
import TextContent from 'components/TextContent';
import Base from 'templates/Base';
import * as Style from './styles';

export type GameTemplateProps = {
	slug?: string;
	cover: string;
	gameInfo: GameInfoProps;
	gallery?: GalleryImageProps[];
	description: string;
	details: GameDetailsProps;
	upcomingGames: GameCardProps[];
	upcomingHighlight: HighlightProps;
	recommendedTitle: string;
	upcomingTitle: string;
	recommendedGames: GameCardProps[];
};

const Game = ({
	slug,
	cover,
	gameInfo,
	gallery,
	description,
	details,
	upcomingTitle,
	upcomingGames,
	upcomingHighlight,
	recommendedTitle,
	recommendedGames
}: GameTemplateProps) => (
	<Base>
		<NextSeo
			title={`${gameInfo.title} - Won Games`}
			description={gameInfo.description}
			canonical={`https://wongames.willianjusten.com.br/game/${slug}`}
			openGraph={{
				url: `https://wongames.willianjusten.com.br/game/${slug}`,
				title: `${gameInfo.title} - Won Games`,
				description: gameInfo.description,
				images: [
					{
						url: cover,
						alt: `${gameInfo.title}`
					}
				]
			}}
		/>
		<Style.Cover>
			<Image src={cover} alt={gameInfo.title} layout="fill" priority />
		</Style.Cover>

		<Style.Main>
			<Style.SectionGameInfo>
				<GameInfo {...gameInfo} />
			</Style.SectionGameInfo>

			<Style.SectionGallery>{!!gallery && <Gallery items={gallery} />}</Style.SectionGallery>

			<Style.SectionDescription>
				<TextContent title="Description" content={description} />
			</Style.SectionDescription>

			<Style.SectionGameDetails>
				<GameDetails {...details} />

				<Divider />
			</Style.SectionGameDetails>

			<Showcase title={upcomingTitle} games={upcomingGames} highlight={upcomingHighlight} />

			<Showcase title={recommendedTitle} games={recommendedGames} />
		</Style.Main>
	</Base>
);

export default Game;
