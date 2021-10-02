import CartIcon from '../CartIcon';
import CartList from '../CartList';
import Dropdown from '../Dropdown';
import { GameItemProps } from '../GameItem';
import * as Style from './styles';

export type CartDropdownProps = {
    items: GameItemProps[];
    total: string;
};

const CartDropdown = ({ items, total }: CartDropdownProps) => (
    <Style.Wrapper>
        <Dropdown title={<CartIcon quantity={items.length} />}>
            <CartList items={items} total={total} hasButton></CartList>
        </Dropdown>
    </Style.Wrapper>
);

export default CartDropdown;
