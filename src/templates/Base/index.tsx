import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { useSession } from 'next-auth/client';
import * as Style from './styles';

export type BaseTemplateProps = {
	children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
	const [session] = useSession();

	return (
		<Style.Wrapper>
			<Container>
				<Menu username={session?.user?.name} />
			</Container>

			<Style.Content>{children}</Style.Content>

			<Style.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</Style.SectionFooter>
		</Style.Wrapper>
	);
};

export default Base;
