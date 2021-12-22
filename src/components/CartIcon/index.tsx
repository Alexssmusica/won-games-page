import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';
import { useCart } from 'hooks/use-cart';
import * as Style from './styles';

const CartIcon = () => {
	const { quantity } = useCart();

	return (
		<Style.Wrapper>
			{quantity > 0 && <Style.Badge aria-label="Cart Items">{quantity}</Style.Badge>}
			<ShoppingCart aria-label="Shopping Cart" />
		</Style.Wrapper>
	);
};

export default CartIcon;
