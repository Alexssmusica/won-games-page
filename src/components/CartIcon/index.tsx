import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';
import * as Style from './styles';

export type CartIconProps = {
	quantity?: number;
};

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
	<Style.Wrapper>
		{quantity > 0 && <Style.Badge aria-label="Cart Items">{quantity}</Style.Badge>}
		<ShoppingCart aria-label="Shopping Cart" />
	</Style.Wrapper>
);

export default CartIcon;
