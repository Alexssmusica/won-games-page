import Link from 'next/link';
import { AccountCircle, FavoriteBorder, ExitToApp } from '@styled-icons/material-outlined';
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';

import Dropdown from '../Dropdown';
import * as Style from './styles';

export type UserDropdownProps = {
    userName: string;
};

const UserDropdown = ({ userName }: UserDropdownProps) => (
    <Dropdown
        title={
            <>
                <AccountCircle size={24} />
                <Style.Username>{userName}</Style.Username>
                <ChevronDown size={24} />
            </>
        }
    >
        <Style.Nav>
            <Link href="/profile/me" passHref>
                <Style.Link title="My profile">
                    <AccountCircle />
                    <span>My profile</span>
                </Style.Link>
            </Link>
            <Link href="/wishlist" passHref>
                <Style.Link title="Wishlist">
                    <FavoriteBorder />
                    <span>Wishlist</span>
                </Style.Link>
            </Link>
            <Link href="/logout" passHref>
                <Style.Link title="Sign out">
                    <ExitToApp />
                    <span>Sign out</span>
                </Style.Link>
            </Link>
        </Style.Nav>
    </Dropdown>
);

export default UserDropdown;
