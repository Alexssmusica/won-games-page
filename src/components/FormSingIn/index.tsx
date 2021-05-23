import TextField from '../TextField';
import Button from '../Buttom';
import * as Style from './styles';
import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';

const FormSingIn = () => (
    <Style.Wrapper>
        <form>
            <TextField name="email" placeholder="Email" type="email" icon={<Email />} />
            <TextField name="password" placeholder="Password" type="password" icon={<Lock />} />
            <Style.ForgotPassword href="#">Forgot your password?</Style.ForgotPassword>

            <Button size="large" fullWidth>
                Sign in now
            </Button>

            <Style.FormLink>
                Don’t have an account?{' '}
                <Link href="/sign-up">
                    <a>Sign up</a>
                </Link>
            </Style.FormLink>
        </form>
    </Style.Wrapper>
);

export default FormSingIn;
