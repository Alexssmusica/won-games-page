import TextField from '../TextField';
import Button from '../Buttom';
import Link from 'next/link';
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined';
import * as Style from './styles';

const FormSingUp = () => (
    <Style.Wrapper>
        <form>
            <TextField name="name" placeholder="Name" type="text" icon={<AccountCircle />} />
            <TextField name="email" placeholder="Email" type="email" icon={<Email />} />
            <TextField name="password" placeholder="Password" type="password" icon={<Lock />} />
            <TextField name="confirm-password" placeholder="Confirm password" type="password" icon={<Lock />} />

            <Button size="large" fullWidth>
                Sign up now
            </Button>

            <Style.FormLink>
                Already have an account?{' '}
                <Link href="/sign-in">
                    <a>Sign in</a>
                </Link>
            </Style.FormLink>
        </form>
    </Style.Wrapper>
);

export default FormSingUp;
