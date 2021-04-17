import { AddShoppingCart, FavoriteBorder, Favorite } from '@styled-icons/material-outlined';

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import Buttom from 'components/Buttom';
import * as Style from './styles';

export type GameCardProps = {
    title: string;
    developer: string;
    img: string;
    price: string;
    promotionalPrice?: string;
    favorite?: boolean;
    ribbon?: React.ReactNode;
    ribbonColor?: RibbonColors;
    ribbonSize?: RibbonSizes;
    onFav?: () => void;
};

const GameCard = ({
    title,
    developer,
    img,
    price,
    promotionalPrice,
    favorite = false,
    ribbon,
    ribbonColor = 'primary',
    ribbonSize = 'small',
    onFav
}: GameCardProps) => (
    <Style.Wrapper>
        {!!ribbon && (
            <Ribbon color={ribbonColor} size={ribbonSize}>
                {ribbon}
            </Ribbon>
        )}
        <Style.ImageBox>
            <img src={img} alt={title} />
        </Style.ImageBox>
        <Style.Content>
            <Style.Info>
                <Style.Title>{title}</Style.Title>
                <Style.Developer>{developer}</Style.Developer>
            </Style.Info>
            <Style.FavButton onClick={onFav} role="button">
                {favorite ? (
                    <Favorite aria-label="Remove from Wishlist" />
                ) : (
                    <FavoriteBorder aria-label="Add to Wishlist" />
                )}
            </Style.FavButton>
            <Style.BuyBox>
                {!!promotionalPrice && <Style.Price isPromotional>{price}</Style.Price>}
                <Style.Price>{promotionalPrice || price}</Style.Price>
                <Buttom icon={<AddShoppingCart />} size="small" />
            </Style.BuyBox>
        </Style.Content>
    </Style.Wrapper>
);

export default GameCard;
