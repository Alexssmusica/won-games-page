import { Done } from '@styled-icons/material-outlined/Done';
import Link from 'next/link';
import { useEffect } from 'react';

import Base from 'templates/Base';

import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import Showcase from 'components/Showcase';
import { HighlightProps } from 'components/Highlight';

import * as Style from './styles';
import { useCart } from 'hooks/use-cart';

export type SuccessTemplateProps = {
	recommendedTitle: string;
	recommendedGames: GameCardProps[];
	recommendedHighlight: HighlightProps;
};

const Success = ({ recommendedTitle, recommendedGames, recommendedHighlight }: SuccessTemplateProps) => {
	const { clearCart } = useCart();
	useEffect(() => {
		clearCart();
	}, []);

	return (
		<Base>
			<Container>
				<Style.Wrapper>
					<Style.Heading>Your purchase was successful!</Style.Heading>

					<Style.CheckMark>
						<Done />
					</Style.CheckMark>

					<Style.Text>
						Wait for your payment details by email. Your game is now available for download inside your{' '}
						<Link href="/profile/orders">
							<a>Orders List</a>
						</Link>
						. Enjoy!
					</Style.Text>
				</Style.Wrapper>
			</Container>

			<Showcase title={recommendedTitle} games={recommendedGames} highlight={recommendedHighlight} />
		</Base>
	);
};

export default Success;
