import React from 'react';
import { Divider } from '../../components/Divider';
import Gallery, { GalleryImageProps } from '../../components/Gallery';
import { GameCardProps } from '../../components/GameCard';
import GameDetails, { GameDetailsProps } from '../../components/GameDetails';
import GameInfo, { GameInfoProps } from '../../components/GameInfo';
import { HighlightProps } from '../../components/Highlight';
import Showcase from '../../components/Showcase';
import TextContent from '../../components/TextContent';
import Base from '../Base';
import * as Style from './styles';

export type GameTemplateProps = {
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
        <Style.Cover src={cover} role="image" aria-label="cover" />

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
