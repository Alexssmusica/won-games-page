import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import Highlight, { HighlightProps } from 'components/Highlight';
import * as Style from './styles';

export type ShowcaseProps = {
	title?: string;
	highlight?: HighlightProps;
	games?: GameCardProps[];
	color?: 'white' | 'black';
};

const Showcase = ({ title, highlight, games, color = 'white' }: ShowcaseProps) => (
	<Style.Wrapper data-cy={title || 'showcase'}>
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
