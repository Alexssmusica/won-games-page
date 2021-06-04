import * as Style from './styles';

import Button from 'components/Buttom';
import Link from 'next/link';

export type EmptyGamesProps = {
    title: string;
    description: string;
    hasLink?: boolean;
};

const EmptyGames = ({ title, description, hasLink }: EmptyGamesProps) => (
    <Style.Wrapper>
        <Style.Image src="/img/empty-game.svg" alt="A gamer in a couch playing videogame" role="image" />

        <Style.Title>{title}</Style.Title>
        <Style.Description>{description}</Style.Description>

        {hasLink && (
            <Link href="/" passHref>
                <Button as="a">Go back to store</Button>
            </Link>
        )}
    </Style.Wrapper>
);
export default EmptyGames;
