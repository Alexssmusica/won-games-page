import { ShoppingCart } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import Heading from 'components/Heading';
import * as Style from './styles';

const PaymentForm = () => {
	return (
		<Style.Wrapper>
			<Style.Body>
				<Heading color="black" size="small" lineBottom>
					Payment
				</Heading>
			</Style.Body>
			<Style.Footer>
				<Button as="a" fullWidth minimal>
					Continue shopping
				</Button>
				<Button fullWidth icon={<ShoppingCart />}>
					Buy now
				</Button>
			</Style.Footer>
		</Style.Wrapper>
	);
};
export default PaymentForm;
