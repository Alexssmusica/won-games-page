import Heading from '../../components/Heading';
import Logo from '../../components/Logo';
import * as Style from './styles';

type AuthProps = {
    title: string;
    children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
    <Style.Wrapper>
        <Style.BannerBlock>
            <Style.BannerComponent>
                <Logo />

                <div>
                    <Heading>All your favorite games in one place</Heading>
                    <Style.Subtitle>
                        <strong>WON</strong> is the best and most complete gaming platform.
                    </Style.Subtitle>
                </div>

                <Style.Footer>Won Games 2020 © Todos os Direitos Reservados</Style.Footer>
            </Style.BannerComponent>
        </Style.BannerBlock>

        <Style.Content>
            <Style.ContentWrapper>
                <Logo color="black" size="large" />
                <Heading color="black" lineColor="secondary" lineLeft>
                    {title}
                </Heading>

                {children}
            </Style.ContentWrapper>
        </Style.Content>
    </Style.Wrapper>
);

export default Auth;
