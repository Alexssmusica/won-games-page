import React from 'react';

import CartList, { CartListProps } from 'components/CartList';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import PaymentForm from 'components/PaymentForm';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';

import * as Style from './styles';

export type CartProps = {
	recommendedTitle: string;
	recommendedGames: GameCardProps[];
	recommendedHighlight: HighlightProps;
} & CartListProps;

const Cart = ({ recommendedTitle, recommendedGames, recommendedHighlight }: CartProps) => {
	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary">
					My cart
				</Heading>

				<Style.Content>
					<CartList />
					<PaymentForm />
				</Style.Content>

				<Divider />
			</Container>
			<Showcase title={recommendedTitle} games={recommendedGames} highlight={recommendedHighlight} />
		</Base>
	);
};

export default Cart;
