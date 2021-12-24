import { signIn } from 'next-auth/client';
import Link from 'next/link';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined';

import { MUTATION_REGISTER } from 'graphql/mutation/register';
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import { FormWrapper, FormLink, FormLoading } from 'components/Form';
import TextField from 'components/TextField';
import Button from 'components/Button';

const FormSingUp = () => {
	const [values, setValues] = useState<UsersPermissionsRegisterInput>({
		email: '',
		username: '',
		password: ''
	});

	const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
		onError: (error) => console.error(error),
		onCompleted: () => {
			!error &&
				signIn('credentials', {
					email: values.email,
					password: values.password,
					callbackUrl: '/'
				});
		}
	});

	const handleInput = (field: string, value: string) => {
		setValues((state) => ({
			...state,
			[field]: value
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await createUser({
			variables: {
				input: {
					email: values.email,
					username: values.username,
					password: values.password
				}
			}
		});
	};

	return (
		<FormWrapper>
			<form onSubmit={handleSubmit}>
				<TextField
					name="username"
					placeholder="Username"
					type="text"
					onInputChange={(value) => handleInput('username', value)}
					icon={<AccountCircle />}
				/>
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
				<TextField
					name="confirm-password"
					placeholder="Confirm password"
					onInputChange={(value) => handleInput('confirm-password', value)}
					type="password"
					icon={<Lock />}
				/>

				<Button type="submit" size="large" fullWidth disabled={loading}>
					{loading ? <FormLoading /> : <span>Sign up now</span>}
				</Button>

				<FormLink>
					Already have an account?{' '}
					<Link href="/sign-in">
						<a>Sign in</a>
					</Link>
				</FormLink>
			</form>
		</FormWrapper>
	);
};

export default FormSingUp;
