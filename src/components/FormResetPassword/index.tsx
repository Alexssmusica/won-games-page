import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

import { ErrorOutline, Lock } from '@styled-icons/material-outlined';

import { FormWrapper, FormLoading, FormError } from 'components/Form';
import Button from 'components/Button';
import TextField from 'components/TextField';

import { FieldErrors } from 'utils/validations';

const FormResetPassword = () => {
	const [formError, setFormError] = useState('');
	const [fieldError, setFieldError] = useState<FieldErrors>({});
	const [values, setValues] = useState({ password: '', confirmPassword: '' });
	const [loading, setLoading] = useState(false);
	const routes = useRouter();
	const { push, query } = routes;

	const handleInput = (field: string, value: string) => {
		setValues((state) => ({ ...state, [field]: value }));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);

		const errors = {}; // validate after

		if (Object.keys(errors).length) {
			setFieldError(errors);
			setLoading(false);
			return;
		}

		setFieldError({});

		// sign in
		const result = await signIn('credentials', {
			...values,
			redirect: false,
			callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
		});

		if (result?.url) {
			return push(result?.url);
		}

		setLoading(false);

		// jogar o erro
		setFormError('username or password is invalid');
	};

	return (
		<FormWrapper>
			{!!formError && (
				<FormError>
					<ErrorOutline /> {formError}
				</FormError>
			)}
			<form onSubmit={handleSubmit}>
				<TextField
					name="password"
					placeholder="Password"
					type="password"
					error={fieldError?.password}
					onInputChange={(value) => handleInput('password', value)}
					icon={<Lock />}
				/>

				<TextField
					name="confirm_password"
					placeholder="Confirm password"
					error={fieldError?.confirm_password}
					onInputChange={(value) => handleInput('confirm_password', value)}
					type="password"
					icon={<Lock />}
				/>

				<Button type="submit" size="large" fullWidth disabled={loading}>
					{loading ? <FormLoading /> : <span>Reset Password</span>}
				</Button>
			</form>
		</FormWrapper>
	);
};

export default FormResetPassword;
