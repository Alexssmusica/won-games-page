import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { Email, Lock } from '@styled-icons/material-outlined';
import Link from 'next/link';

import { FormWrapper, FormLink, FormLoading } from 'components/Form';
import TextField from 'components/TextField';
import Button from 'components/Button';
import * as Style from './styles';

const FormSingIn = () => {
	const [values, setValues] = useState({});
	const [loading, setLoading] = useState(false);
	const { push } = useRouter();

	const handleInput = (field: string, value: string) => {
		setValues((state) => ({
			...state,
			[field]: value
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		const result = await signIn('credentials', {
			...values,
			redirect: false,
			callbackUrl: '/'
		});

		setLoading(false);

		if (result?.url) {
			return push(result.url);
		}

		console.error(result, 'email ou senha incorretos');
	};

	return (
		<FormWrapper>
			<form onSubmit={handleSubmit}>
				<TextField
					name="email"
					placeholder="Email"
					type="email"
					onInputChange={(value) => handleInput('email', value)}
					icon={<Email />}
				/>
				<TextField
					name="password"
					placeholder="Password"
					type="password"
					onInputChange={(value) => handleInput('password', value)}
					icon={<Lock />}
				/>
				<Style.ForgotPassword href="#">Forgot your password?</Style.ForgotPassword>

				<Button type="submit" size="large" fullWidth disabled={loading}>
					{loading ? <FormLoading /> : <span>Sign in now</span>}
				</Button>

				<FormLink>
					Don’t have an account?{' '}
					<Link href="/sign-up">
						<a>Sign up</a>
					</Link>
				</FormLink>
			</form>
		</FormWrapper>
	);
};

export default FormSingIn;
