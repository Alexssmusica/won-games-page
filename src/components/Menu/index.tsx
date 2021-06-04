import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import Logo from 'components/Logo';
import * as Style from './styles';
import Buttom from '../Buttom';
import MediaMatch from '../MediaMatch';
import Link from 'next/link';

export type MenuProps = {
    username?: string;
};

const Menu = ({ username }: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Style.Wrapper>
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
                    <Style.MenuLink href="#">Explore</Style.MenuLink>
                </Style.MenuNav>
            </MediaMatch>

            <Style.MenuGroup>
                <Style.IconWrapper>
                    <SearchIcon aria-label="Search" />
                </Style.IconWrapper>
                <Style.IconWrapper>
                    <ShoppingCartIcon aria-label="Open Shopping Cart" />
                </Style.IconWrapper>
                {!username && (
                    <MediaMatch greaterThan="medium">
                        <Link href="/sign-in" passHref>
                            <Buttom as="a">Sign in</Buttom>
                        </Link>
                    </MediaMatch>
                )}
            </Style.MenuGroup>

            <Style.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
                <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
                <Style.MenuNav>
                    <Link href="/" passHref>
                        <Style.MenuLink>Home</Style.MenuLink>
                    </Link>
                    <Style.MenuLink href="#">Explore</Style.MenuLink>

                    {!!username && (
                        <>
                            <Style.MenuLink href="#">My account</Style.MenuLink>
                            <Style.MenuLink href="#">Wishlist</Style.MenuLink>
                        </>
                    )}
                </Style.MenuNav>

                {!username && (
                    <Style.RegisterBox>
                        <Link href="/sign-in" passHref>
                            <Buttom fullWidth size="large" as="a">
                                Sign in
                            </Buttom>
                        </Link>
                        <span>or</span>
                        <Link href="/sign-up" passHref>
                            <Style.CreateAccount title="Sign Up">Sign Up</Style.CreateAccount>
                        </Link>
                    </Style.RegisterBox>
                )}
            </Style.MenuFull>
        </Style.Wrapper>
    );
};

export default Menu;
