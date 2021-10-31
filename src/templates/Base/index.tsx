import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import * as Style from './styles';

export type BaseTemplateProps = {
    children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
    <Style.Wrapper>
        <Container>
            <Menu />
        </Container>

        <Style.Content>{children}</Style.Content>

        <Style.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </Style.SectionFooter>
    </Style.Wrapper>
);

export default Base;
