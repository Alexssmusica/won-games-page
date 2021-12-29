import { useEffect, useState } from 'react';
import { session, Session, useSession } from 'next-auth/client';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';

import { createPaymentIntent } from 'utils/stripe/methods';
import { useCart } from 'hooks/use-cart';
import Button from 'components/Button';
import Heading from 'components/Heading';

import * as Style from './styles';

type PaymentFormProps = {
	session: Session;
};

const PaymentForm = ({ session }: PaymentFormProps) => {
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
		async function setPaymentMode() {
			if (items.length) {
				// bater na API /orders/create-payment-intent
				const data = await createPaymentIntent({
					items,
					token: session.jwt
				});

				// se eu receber freeGames: true => setFreeGames
				// faço o fluxo de jogo gratuito
				if (data.freeGames) {
					setFreeGames(true);
					console.log(data.freeGames);
					return;
				}

				// se eu receber um erro
				// setError
				if (data.error) {
					setError(data.error);
				} else {
					// senão o paymentIntent foi válido
					// setClientSecret
					setClientSecret(data.client_secret);
					console.log(data.client_secret);
				}
			}
		}

		setPaymentMode();
	}, [items, session]);

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
