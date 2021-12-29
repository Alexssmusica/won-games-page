import { useState } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import Heading from 'components/Heading';
import * as Style from './styles';

const PaymentForm = () => {
	const [error, setError] = useState<string | null>(null);

	const handleChange = async (event: StripeCardElementChangeEvent) => {
		setError(event.error ? event.error.message : '');
	};

	return (
		<Style.Wrapper>
			<Style.Body>
				<Heading color="black" size="small" lineBottom>
					Payment
				</Heading>
				<CardElement options={{ hidePostalCode: true }} onChange={handleChange} />

				{error && (
					<Style.Error>
						<ErrorOutline size={20} />
						{error}
					</Style.Error>
				)}
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
