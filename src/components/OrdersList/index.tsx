import GameItem, { GameItemProps } from 'components/GameItem';
import Heading from 'components/Heading';
import Empty from 'components/Empty';
import * as Style from './styles';

export type OrdersListProps = {
    items?: GameItemProps[];
};

const OrdersList = ({ items = [] }: OrdersListProps) => (
    <Style.Wrapper>
        <Heading lineBottom lineColor="primary" color="black" size="small">
            My orders
        </Heading>

        {items.length ? (
            items.map((item) => <GameItem key={item.downloadLink} {...item} />)
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
