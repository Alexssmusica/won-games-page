import Link from 'next/link';
import { AccountCircle, CreditCard, ExitToApp, FormatListBulleted } from '@styled-icons/material-outlined';
import * as Style from './styles';

export type ProfileMenuProps = {
	activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
	<Style.Nav>
		<Link href="/profile/me" passHref>
			<Style.Link isActive={activeLink === '/profile/me'} title="My profile">
				<AccountCircle size={24} />
				<span>My profile</span>
			</Style.Link>
		</Link>

		<Link href="/profile/cards" passHref>
			<Style.Link isActive={activeLink === '/profile/cards'} title="My cards">
				<CreditCard size={24} />
				<span>My cards</span>
			</Style.Link>
		</Link>

		<Link href="/profile/orders" passHref>
			<Style.Link isActive={activeLink === '/profile/orders'} title="My orders">
				<FormatListBulleted size={24} />
				<span>My orders</span>
			</Style.Link>
		</Link>

		<Link href="/logout" passHref>
			<Style.Link>
				<ExitToApp size={24} />
				<span>Sign out</span>
			</Style.Link>
		</Link>
	</Style.Nav>
);

export default ProfileMenu;
