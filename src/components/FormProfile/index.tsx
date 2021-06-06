import Button from '../Button';
import Heading from '../Heading';
import TextField from '../TextField';
import * as Style from './styles';

const FormProfile = () => (
    <Style.Wrapper>
        <Heading lineBottom color="black" size="small">
            My profile
        </Heading>

        <Style.Form>
            <TextField name="name" placeholder="Name" label="Name" initialValue="John Doe" />

            <TextField
                name="email"
                type="email"
                placeholder="E-mail"
                initialValue="johndoe@gmail.com"
                label="E-mail"
                disabled
            />

            <TextField name="password" type="password" placeholder="Type your password" label="Password" />

            <TextField name="new_password" type="password" placeholder="New password" label="New password" />

            <Button size="large">Save</Button>
        </Style.Form>
    </Style.Wrapper>
);

export default FormProfile;
