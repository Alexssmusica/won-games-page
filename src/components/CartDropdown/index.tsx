import CartIcon from 'components/CartIcon';
import CartList from 'components/CartList';
import Dropdown from 'components/Dropdown';
import { GameItemProps } from 'components/GameItem';
import * as Style from './styles';

export type CartDropdownProps = {
    items?: GameItemProps[];
    total?: string;
};

const CartDropdown = ({ items, total }: CartDropdownProps) => (
    <Style.Wrapper>
        <Dropdown title={<CartIcon quantity={items?.length} />}>
            <CartList items={items} total={total} hasButton></CartList>
        </Dropdown>
    </Style.Wrapper>
);

export default CartDropdown;
