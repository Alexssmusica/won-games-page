import Link from 'next/link';
import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import Logo from 'components/Logo';
import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';
import CartDropdown from 'components/CartDropdown';
import CartIcon from 'components/CartIcon';
import UserDropdown from 'components/UserDropdown';
import * as Style from './styles';

export type MenuProps = {
	username?: string | null;
	loading?: boolean;
};

const Menu = ({ username, loading }: MenuProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Style.Wrapper isOpen={isOpen}>
			<MediaMatch lessThan="medium">
				<Style.IconWrapper onClick={() => setIsOpen(true)}>
					<MenuIcon aria-label="Open Menu" />
				</Style.IconWrapper>
			</MediaMatch>

			<Style.LogoWrapper>
				<Link href="/" passHref>
					<a>
						<Logo hideOnMobile />
					</a>
				</Link>
			</Style.LogoWrapper>

			<MediaMatch greaterThan="medium">
				<Style.MenuNav>
					<Link href="/" passHref>
						<Style.MenuLink>Home</Style.MenuLink>
					</Link>
					<Link href="/games" passHref>
						<Style.MenuLink>Explore</Style.MenuLink>
					</Link>
				</Style.MenuNav>
			</MediaMatch>
			{!loading && (
				<>
					<Style.MenuGroup>
						<Style.IconWrapper>
							<SearchIcon aria-label="Search" />
						</Style.IconWrapper>
						<Style.IconWrapper>
							<MediaMatch greaterThan="medium">
								<CartDropdown />
							</MediaMatch>
							<MediaMatch lessThan="medium">
								<Link href="/cart" passHref>
									<a>
										<CartIcon />
									</a>
								</Link>
							</MediaMatch>
						</Style.IconWrapper>
						<MediaMatch greaterThan="medium">
							{!username ? (
								<Link href="/sign-in" passHref>
									<Button as="a">Sign in</Button>
								</Link>
							) : (
								<UserDropdown username={username} />
							)}
						</MediaMatch>
					</Style.MenuGroup>

					<Style.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
						<CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
						<Style.MenuNav>
							<Link href="/" passHref>
								<Style.MenuLink>Home</Style.MenuLink>
							</Link>
							<Link href="/games" passHref>
								<Style.MenuLink>Explore</Style.MenuLink>
							</Link>
							{!!username && (
								<>
									<Link href="/profile/me" passHref>
										<Style.MenuLink>My profile</Style.MenuLink>
									</Link>
									<Link href="/profile/wishlist" passHref>
										<Style.MenuLink>Wishlist</Style.MenuLink>
									</Link>
								</>
							)}
						</Style.MenuNav>

						{!username && (
							<Style.RegisterBox>
								<Link href="/sign-in" passHref>
									<Button fullWidth size="large" as="a">
										Sign in
									</Button>
								</Link>
								<span>or</span>
								<Link href="/sign-up" passHref>
									<Style.CreateAccount title="Sign Up">Sign Up</Style.CreateAccount>
								</Link>
							</Style.RegisterBox>
						)}
					</Style.MenuFull>
				</>
			)}
		</Style.Wrapper>
	);
};

export default Menu;
