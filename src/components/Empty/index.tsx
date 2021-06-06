import * as Style from './styles';

import Button from 'components/Button';
import Link from 'next/link';

export type EmptyProps = {
    title: string;
    description: string;
    hasLink?: boolean;
};

const Empty = ({ title, description, hasLink }: EmptyProps) => (
    <Style.Wrapper>
        <Style.Image src="/img/empty.svg" alt="A gamer in a couch playing videogame" role="image" />

        <Style.Title>{title}</Style.Title>
        <Style.Description>{description}</Style.Description>

        {hasLink && (
            <Link href="/" passHref>
                <Button as="a">Go back to store</Button>
            </Link>
        )}
    </Style.Wrapper>
);
export default Empty;
