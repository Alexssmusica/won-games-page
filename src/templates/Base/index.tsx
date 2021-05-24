import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import * as Style from './styles';

export type BaseTemplateProps = {
    children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
    <section>
        <Container>
            <Menu />
        </Container>

        {children}

        <Style.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </Style.SectionFooter>
    </section>
);

export default Base;
