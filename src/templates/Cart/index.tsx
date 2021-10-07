import React from 'react';
import CartList, { CartListProps } from '../../components/CartList';
import { Container } from '../../components/Container';
import { Divider } from '../../components/Divider';
import Empty from '../../components/Empty';
import { GameCardProps } from '../../components/GameCard';
import Heading from '../../components/Heading';
import { HighlightProps } from '../../components/Highlight';
import PaymentOptions, { PaymentOptionsProps } from '../../components/PaymentOptions';
import Showcase from '../../components/Showcase';
import Base from '../Base';
import * as Style from './styles';

export type CartProps = {
    recommendedTitle: string;
    recommendedGames: GameCardProps[];
    recommendedHighlight: HighlightProps;
} & CartListProps &
    Pick<PaymentOptionsProps, 'cards'>;

const Cart = ({ recommendedTitle, recommendedGames, recommendedHighlight, items, total, cards }: CartProps) => {
    const handlePayment = () => ({});

    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="secondary">
                    My cart
                </Heading>

                {items?.length ? (
                    <Style.Content>
                        <CartList items={items} total={total} />

                        <PaymentOptions cards={cards} handlePayment={handlePayment} />
                    </Style.Content>
                ) : (
                    <Empty
                        img="/img/empty.svg"
                        title="Your cart is empty"
                        description="Go back to the store and explore great games and offers"
                        hasLink
                    />
                )}
                <Divider />
            </Container>
            <Showcase title={recommendedTitle} games={recommendedGames} highlight={recommendedHighlight} />
        </Base>
    );
};

export default Cart;
