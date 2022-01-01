import Image from 'next/image';
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
	<Style.Wrapper alignment={alignment} data-cy="highlight">
		<Image src={backgroundImage} alt={`${title} background`} layout="fill" />
		{!!floatImage && (
			<Style.FloatImageWrapper>
				<Image src={floatImage} alt={title} width={400} height={300} />
			</Style.FloatImageWrapper>
		)}
		<Style.Content>
			<Style.Title>{title}</Style.Title>
			<Style.SubTitle>{subtitle}</Style.SubTitle>
			<Button as="a" href={buttonLink}>
				{buttonLabel}
			</Button>
		</Style.Content>
	</Style.Wrapper>
);

export default Highlight;
