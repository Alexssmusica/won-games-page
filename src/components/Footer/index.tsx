import Link from 'next/link';

import Logo from 'components/Logo';
import Heading from 'components/Heading';
import * as Style from './styles';

const Footer = () => (
    <Style.Wrapper>
        <Logo color="black" />
        <Style.Content>
            <Style.Column>
                <Heading color="black" size="small" lineBottom lineColor="secondary">
                    Contact Us
                </Heading>

                <a href="mailto:sac@wongames.com">sac@wongames.com</a>
            </Style.Column>
            <Style.Column>
                <Heading color="black" lineColor="secondary" lineBottom size="small">
                    Follow us
                </Heading>

                <nav aria-labelledby="social media">
                    <a href="https://www.instagram.com/won-games" target="_blank" rel="noopenner, noreferrer">
                        Instagram
                    </a>
                    <a href="https://www.twitter.com/won-games" target="_blank" rel="noopenner, noreferrer">
                        Twitter
                    </a>
                    <a href="https://www.youtube.com/won-games" target="_blank" rel="noopenner, noreferrer">
                        Youtube
                    </a>
                    <a href="https://www.facebook.com/won-games" target="_blank" rel="noopenner, noreferrer">
                        Facebook
                    </a>
                </nav>
            </Style.Column>

            <Style.Column>
                <Heading color="black" lineColor="secondary" lineBottom size="small">
                    Links
                </Heading>

                <nav aria-labelledby="footer resources">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/games">
                        <a>Store</a>
                    </Link>
                    <Link href="/search">
                        <a>Buscar</a>
                    </Link>
                </nav>
            </Style.Column>

            <Style.Column aria-labelledby="footer-contact">
                <Heading color="black" lineColor="secondary" lineBottom size="small">
                    Location
                </Heading>
                <span>Lorem ipsum dolor sit.</span>
                <span>Lorem Ipsum</span>
                <span>Lorem, ipsum dolor.</span>
            </Style.Column>
        </Style.Content>
        <Style.Copyright>Won Games 2020 © All rights reserved.</Style.Copyright>
    </Style.Wrapper>
);

export default Footer;
