import Link from 'next/link';
import Image from 'next/image';
import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as Style from './styles';
import { toYear } from 'utils/formatDate';

type AuthProps = {
	title: string;
	children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
	<Style.Wrapper>
		<Style.BannerBlock>
			<Image src="/img/auth-bg.jpg" alt="Won Games Auth Page" layout="fill" objectFit="cover" />
			<Style.BannerComponent>
				<Link href="/">
					<a>
						<Logo id="banner" />
					</a>
				</Link>

				<div>
					<Heading size="huge">All your favorite games in one place</Heading>
					<Style.Subtitle>
						<strong>WON</strong> is the best and most complete gaming platform.
					</Style.Subtitle>
				</div>

				<Style.Footer>Won Games {toYear()} © Todos os Direitos Reservados</Style.Footer>
			</Style.BannerComponent>
		</Style.BannerBlock>

		<Style.Content>
			<Style.ContentWrapper>
				<Link href="/">
					<a>
						<Logo color="black" size="large" id="content" />
					</a>
				</Link>

				<Heading color="black" lineColor="secondary" lineLeft>
					{title}
				</Heading>

				{children}
			</Style.ContentWrapper>
		</Style.Content>
	</Style.Wrapper>
);

export default Auth;
