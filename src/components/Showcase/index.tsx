import { GameCardProps } from '../GameCard';
import GameCardSlider from '../GameCardSlider';
import Heading from '../Heading';
import Highlight, { HighlightProps } from '../Highlight';
import * as Style from './styles';

export type ShowcaseProps = {
    title?: string;
    highlight?: HighlightProps;
    games?: GameCardProps[];
    color?: 'white' | 'black';
};

const Showcase = ({ title, highlight, games, color = 'white' }: ShowcaseProps) => (
    <Style.Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary">
                {title}
            </Heading>
        )}
        {!!highlight && <Highlight {...highlight} />}
        {!!games && <GameCardSlider items={games} color={color} />}
    </Style.Wrapper>
);

export default Showcase;
