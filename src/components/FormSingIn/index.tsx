import { Email, Lock } from '@styled-icons/material-outlined';
import Link from 'next/link';

import { FormWrapper, FormLink } from 'components/Form';
import TextField from 'components/TextField';
import Button from 'components/Button';
import * as Style from './styles';

const FormSingIn = () => (
    <FormWrapper>
        <form>
            <TextField name="email" placeholder="Email" type="email" icon={<Email />} />
            <TextField name="password" placeholder="Password" type="password" icon={<Lock />} />
            <Style.ForgotPassword href="#">Forgot your password?</Style.ForgotPassword>

            <Button size="large" fullWidth>
                Sign in now
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

export default FormSingIn;
