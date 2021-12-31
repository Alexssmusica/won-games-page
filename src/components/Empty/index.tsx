import Link from 'next/link';
import Image from 'next/image';

import Button from 'components/Button';

import * as Style from './styles';

export type EmptyProps = {
	title: string;
	description: string;
	img: string;
	hasLink?: boolean;
};

const Empty = ({ title, description, hasLink, img }: EmptyProps) => (
	<Style.Wrapper>
		<Image src={img} alt="A gamer in a couch playing videogame" role="image" width={380} height={285} />

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
