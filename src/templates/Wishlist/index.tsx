import Base from 'templates/Base';

import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import { Container } from 'components/Container';
import GameCard, { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
// import Empty from 'components/Empty';
import React from 'react';
import { Grid } from '../../components/Grid';
import { Divider } from '../../components/Divider';
import Empty from '../../components/Empty';

export type WishlistTemplateProps = {
    games?: GameCardProps[];
    recommendedGames: GameCardProps[];
    recommendedHighlight: HighlightProps;
    recommendedTitle: string;
};

const Wishlist = ({ games = [], recommendedGames, recommendedHighlight, recommendedTitle }: WishlistTemplateProps) => (
    <Base>
        <Container>
            <Heading lineLeft lineColor="secondary">
                Wishlist
            </Heading>

            {games.length ? (
                <Grid>
                    {games?.map((game, index) => (
                        <GameCard key={`wishlist-${index}`} {...game} />
                    ))}
                </Grid>
            ) : (
                <Empty
                    img="/img/empty-game.svg"
                    title="Your wishlist is empty"
                    description="Games added to your wishlist will appear here"
                    hasLink
                />
            )}
            <Divider />
        </Container>

        <Showcase title={recommendedTitle} games={recommendedGames} highlight={recommendedHighlight} />
    </Base>
);

export default Wishlist;
