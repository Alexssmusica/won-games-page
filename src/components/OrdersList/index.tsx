import EmptyGames from '../EmptyGames';
import GameItem, { GameItemProps } from '../GameItem';
import Heading from '../Heading';
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
            <EmptyGames
                title="You have no orders yet"
                description="Go back to the store and explore great games and offers"
                hasLink
            />
        )}
    </Style.Wrapper>
);
export default OrdersList;
