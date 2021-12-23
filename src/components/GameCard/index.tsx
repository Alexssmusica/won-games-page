import Link from 'next/link';

import { FavoriteBorder, Favorite } from '@styled-icons/material-outlined';

import formatPrice from 'utils/formatPrice';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import CartButton from 'components/CartButton';
import * as Style from './styles';

export type GameCardProps = {
	id: string;
	slug: string;
	title: string;
	developer: string;
	img: string;
	price: number;
	promotionalPrice?: number;
	favorite?: boolean;
	ribbon?: React.ReactNode;
	ribbonColor?: RibbonColors;
	ribbonSize?: RibbonSizes;
	onFav?: () => void;
};

const GameCard = ({
	id,
	slug,
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
		{price === 0 && (
			<Ribbon color="secondary" size={ribbonSize}>
				Free of Charge
			</Ribbon>
		)}
		<Link href={`game/${slug}`} passHref>
			<Style.ImageBox>
				<img src={img} alt={title} />
			</Style.ImageBox>
		</Link>
		<Style.Content>
			<Link href={`game/${slug}`} passHref>
				<Style.Info>
					<Style.Title>{title}</Style.Title>
					<Style.Developer>{developer}</Style.Developer>
				</Style.Info>
			</Link>
			<Style.FavButton onClick={onFav} role="button">
				{favorite ? (
					<Favorite aria-label="Remove from Wishlist" />
				) : (
					<FavoriteBorder aria-label="Add to Wishlist" />
				)}
			</Style.FavButton>
			<Style.BuyBox>
				{!!promotionalPrice && <Style.Price isPromotional>{formatPrice(price)}</Style.Price>}
				<Style.Price>{price === 0 ? 'FREE' : formatPrice(promotionalPrice || price)}</Style.Price>
				<CartButton id={id} />
			</Style.BuyBox>
		</Style.Content>
	</Style.Wrapper>
);

export default GameCard;
