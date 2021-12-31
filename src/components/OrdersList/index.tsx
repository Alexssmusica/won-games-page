import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem';
import Heading from 'components/Heading';
import Empty from 'components/Empty';
import * as Style from './styles';

type OrdersProps = {
	id: string;
	paymentInfo: PaymentInfoProps;
	games: GameItemProps[];
};

export type OrdersListProps = {
	items?: OrdersProps[];
};

const OrdersList = ({ items = [] }: OrdersListProps) => (
	<Style.Wrapper>
		<Heading lineBottom lineColor="primary" color="black" size="small">
			My orders
		</Heading>

		{items.length ? (
			items.map((order) => {
				return order.games.map((game) => <GameItem key={order.id} {...game} paymentInfo={order.paymentInfo} />);
			})
		) : (
			<Empty
				img="/img/empty.svg"
				title="You have no orders yet"
				description="Go back to the store and explore great games and offers"
				hasLink
			/>
		)}
	</Style.Wrapper>
);
export default OrdersList;
