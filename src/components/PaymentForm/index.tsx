import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';

import { useCart } from 'hooks/use-cart';
import Button from 'components/Button';
import Heading from 'components/Heading';

import * as Style from './styles';
import { createPayment, createPaymentIntent } from 'utils/stripe/methods';
import { Session } from 'next-auth';
import { FormLoading } from 'components/Form';

type PaymentFormProps = {
	session: Session;
};

const PaymentForm = ({ session }: PaymentFormProps) => {
	const { items } = useCart();
	const { push } = useRouter();
	const stripe = useStripe();
	const elements = useElements();

	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState('');
	const [freeGames, setFreeGames] = useState(false);

	useEffect(() => {
		async function setPaymentMode() {
			if (items.length) {
				// bater na API /orders/create-payment-intent
				const data = await createPaymentIntent({
					items,
					token: session.jwt as string
				});

				// se eu receber freeGames: true => setFreeGames
				// faço o fluxo de jogo gratuito
				// console.log(items);
				if (data.freeGames) {
					setFreeGames(true);
					return;
				}

				// se eu receber um erro
				// setError
				if (data.error) {
					setError(data.error);
				} else {
					// senão o paymentIntent foi válido
					// setClientSecret

					setFreeGames(false);
					setClientSecret(data.client_secret);
				}
			}
		}

		setPaymentMode();
	}, [items, session]);

	const handleChange = async (event: StripeCardElementChangeEvent) => {
		setDisabled(!event.complete);
		setError(event.error ? event.error.message : '');
	};

	const saveOrder = async (paymentIntent?: PaymentIntent) => {
		const data = await createPayment({
			items,
			paymentIntent,
			token: session.jwt as string
		});

		return data;
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);

		// se for freeGames
		if (freeGames) {
			// salva no banco
			await saveOrder();
			// redireciona para success
			push('/success');
			return;
		}

		const payload = await stripe!.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements!.getElement(CardElement)!
			}
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setLoading(false);
		} else {
			setError(null);
			setLoading(false);

			// salvar a compra no banco do Strapi

			await saveOrder(payload.paymentIntent);
			// redirecionar para a página de Sucesso
			push('/success');
		}
	};

	return (
		<Style.Wrapper>
			<form onSubmit={handleSubmit}>
				<Style.Body>
					<Heading color="black" size="small" lineBottom>
						Payment
					</Heading>
					{freeGames ? (
						<Style.FreeGames>Only free games, click buy and enjoy!</Style.FreeGames>
					) : (
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
					)}

					{error && (
						<Style.Error>
							<ErrorOutline size={16.8} />
							{error}
						</Style.Error>
					)}
				</Style.Body>
				<Style.Footer>
					<Link href="/" passHref>
						<Button as="a" fullWidth minimal>
							Continue shopping
						</Button>
					</Link>
					<Button
						fullWidth
						icon={loading ? <FormLoading /> : <ShoppingCart />}
						disabled={!freeGames && (disabled || !!error)}
					>
						{!loading && <span>Buy now</span>}
					</Button>
				</Style.Footer>
			</form>
		</Style.Wrapper>
	);
};

export default PaymentForm;
