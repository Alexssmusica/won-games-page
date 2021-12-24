import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined';
import Link from 'next/link';

import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form';
import { FieldErrors, signInValidate } from 'utils/validations';
import TextField from 'components/TextField';
import Button from 'components/Button';
import * as Style from './styles';

const FormSingIn = () => {
	const [formError, setFormError] = useState('');
	const [fieldError, setFieldError] = useState<FieldErrors>({});
	const [values, setValues] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);
	const routes = useRouter();
	const { push, query } = routes;

	const handleInput = (field: string, value: string) => {
		setValues((state) => ({
			...state,
			[field]: value
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		const errors = signInValidate(values);

		if (Object.keys(errors).length) {
			setFieldError(errors);
			setLoading(false);
			setFormError('');
			return;
		}
		setFieldError({});
		const result = await signIn('credentials', {
			...values,
			redirect: false,
			callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
		});

		setLoading(false);

		if (result?.url) {
			return push(result.url);
		}

		setFormError('username or password is incorrect');
	};

	return (
		<FormWrapper>
			{!!formError && (
				<FormError>
					<ErrorOutline />
					{formError}
				</FormError>
			)}
			<form onSubmit={handleSubmit}>
				<TextField
					name="email"
					placeholder="Email"
					type="email"
					error={fieldError?.email}
					onInputChange={(value) => handleInput('email', value)}
					icon={<Email />}
				/>
				<TextField
					name="password"
					placeholder="Password"
					type="password"
					error={fieldError?.password}
					onInputChange={(value) => handleInput('password', value)}
					icon={<Lock />}
				/>
				<Link href="/forgot-password" passHref>
					<Style.ForgotPassword>Forgot your password?</Style.ForgotPassword>
				</Link>

				<Button type="submit" size="large" fullWidth disabled={loading}>
					{loading ? <FormLoading /> : <span>Sign in now</span>}
				</Button>

				<FormLink>
					Don’t have an account?
					<Link href="/sign-up">
						<a>Sign up</a>
					</Link>
				</FormLink>
			</form>
		</FormWrapper>
	);
};

export default FormSingIn;
