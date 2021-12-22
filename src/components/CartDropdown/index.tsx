import CartIcon from 'components/CartIcon';
import CartList from 'components/CartList';
import Dropdown from 'components/Dropdown';
import * as Style from './styles';

const CartDropdown = () => (
	<Style.Wrapper>
		<Dropdown title={<CartIcon />}>
			<CartList hasButton></CartList>
		</Dropdown>
	</Style.Wrapper>
);

export default CartDropdown;
