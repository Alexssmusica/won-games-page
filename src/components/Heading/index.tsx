import * as Style from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
	children: React.ReactNode;
	color?: 'white' | 'black';
	lineLeft?: boolean;
	lineBottom?: boolean;
	lineColor?: LineColors;
	size?: 'small' | 'medium' | 'huge';
};

const Heading = ({
	children,
	color = 'white',
	lineLeft = false,
	lineBottom = false,
	lineColor = 'primary',
	size = 'medium'
}: HeadingProps) => (
	<Style.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom} lineColor={lineColor} size={size}>
		{children}
	</Style.Wrapper>
);

export default Heading;
