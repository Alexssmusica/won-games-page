import { GameCardProps } from '../GameCard';
import GameCardSlider from '../GameCardSlider';
import Heading from '../Heading';
import Highlight, { HighlightProps } from '../Highlight';
import * as Style from './styles';

export type ShowcaseProps = {
    title?: string;
    highlight?: HighlightProps;
    games?: GameCardProps[];
};

const Showcase = ({ title, highlight, games }: ShowcaseProps) => (
    <Style.Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary">
                {title}
            </Heading>
        )}
        {!!highlight && <Highlight {...highlight} />}
        {!!games && <GameCardSlider items={games} />}
    </Style.Wrapper>
);

export default Showcase;
