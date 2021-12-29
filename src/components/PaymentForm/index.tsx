import { useEffect, useState } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';

import { useCart } from 'hooks/use-cart';
import Button from 'components/Button';
import Heading from 'components/Heading';
import * as Style from './styles';

const PaymentForm = () => {
	const { items } = useCart();
	const [error, setError] = useState<string | null>(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState('');
	const [freeGames, setFreeGames] = useState(false);

	const handleChange = async (event: StripeCardElementChangeEvent) => {
		setDisabled(!event.complete);
		setError(event.error ? event.error.message : '');
	};

	useEffect(() => {
		if (items.length) {
			// bater na API /orders/create-payment-intent
			// enviar os items do carrinho
			// se eu receber freeGames: true => setFreeGames
			// faço o fluxo de jogo gratuito
			// se eu receber um erro
			// setError
			// senão o paymentIntent foi válido
			// setClientSecret
		}
	}, [items]);

	return (
		<Style.Wrapper>
			<Style.Body>
				<Heading color="black" size="small" lineBottom>
					Payment
				</Heading>
				<CardElement
					options={{
						hidePostalCode: true,
						style: {
							base: {
								fontSize: '16.8px'
							}
						}
					}}
					onChange={handleChange}
				/>

				{error && (
					<Style.Error>
						<ErrorOutline size={16.8} />
						{error}
					</Style.Error>
				)}
			</Style.Body>
			<Style.Footer>
				<Button as="a" fullWidth minimal>
					Continue shopping
				</Button>
				<Button fullWidth icon={<ShoppingCart />} disabled={disabled || !!error}>
					Buy now
				</Button>
			</Style.Footer>
		</Style.Wrapper>
	);
};
export default PaymentForm;
