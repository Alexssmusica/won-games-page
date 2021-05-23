import TextField from '../TextField';
import Button from '../Buttom';
import * as Style from './styles';
import { FormWrapper, FormLink } from 'components/Form';
import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';

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
