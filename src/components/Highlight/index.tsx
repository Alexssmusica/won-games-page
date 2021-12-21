import Button from 'components/Button';
import * as Style from './styles';

export type HighlightProps = {
	title: string;
	subtitle: string;
	backgroundImage: string;
	floatImage?: string;
	buttonLabel: string;
	buttonLink: string;
	alignment?: 'right' | 'left';
};

const Highlight = ({
	title,
	subtitle,
	backgroundImage,
	floatImage,
	buttonLabel,
	buttonLink,
	alignment = 'right'
}: HighlightProps) => (
	<Style.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
		{!!floatImage && <Style.FloatImage src={floatImage} alt={title} />}
		<Style.Content>
			<Style.Title>{title}</Style.Title>
			<Style.Subtitle>{subtitle}</Style.Subtitle>
			<Button as="a" href={buttonLink}>
				{buttonLabel}
			</Button>
		</Style.Content>
	</Style.Wrapper>
);

export default Highlight;
