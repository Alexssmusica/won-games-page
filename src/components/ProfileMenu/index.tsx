import { AccountCircle, CreditCard, ExitToApp, FormatListBulleted } from '@styled-icons/material-outlined';
import Link from 'next/link';
import * as Style from './styles';

const ProfileMenu = () => (
    <Style.Nav>
        <Link href="/profile/me" passHref>
            <Style.Link>
                <AccountCircle size={24} />
                <span>My profile</span>
            </Style.Link>
        </Link>

        <Link href="/profile/cards" passHref>
            <Style.Link>
                <CreditCard size={24} />
                <span>My cards</span>
            </Style.Link>
        </Link>

        <Link href="/profile/orders" passHref>
            <Style.Link>
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
