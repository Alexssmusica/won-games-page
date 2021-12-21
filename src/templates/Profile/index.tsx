import { useRouter } from 'next/router';

import { Container } from 'components/Container';
import Heading from 'components/Heading';
import ProfileMenu from 'components/ProfileMenu';
import Base from 'templates/Base';
import * as Style from './styles';

export type ProfileTemplateProps = {
	children: React.ReactNode;
};

const Profile = ({ children }: ProfileTemplateProps) => {
	const { asPath } = useRouter();

	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary">
					My profile
				</Heading>

				<Style.Main>
					<ProfileMenu activeLink={asPath} />
					<Style.Content>{children}</Style.Content>
				</Style.Main>
			</Container>
		</Base>
	);
};

export default Profile;
