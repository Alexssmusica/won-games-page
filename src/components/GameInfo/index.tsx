import { AddShoppingCart, FavoriteBorder } from '@styled-icons/material-outlined';
import formatPrice from '../../utils/formatPrice';

import Button from '../Button';
import Heading from '../Heading';
import Ribbon from '../Ribbon';

import * as Style from './styles';

export type GameInfoProps = {
    title: string;
    description: string;
    price: number;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
    <Style.Wrapper>
        <Heading color="black" lineBottom>
            {title}
        </Heading>

        <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

        <Style.Description>{description}</Style.Description>

        <Style.ButtonsWrapper>
            <Button icon={<AddShoppingCart />} size="large">
                Add to cart
            </Button>
            <Button icon={<FavoriteBorder />} size="large" minimal>
                Wishlist
            </Button>
        </Style.ButtonsWrapper>
    </Style.Wrapper>
);

export default GameInfo;
