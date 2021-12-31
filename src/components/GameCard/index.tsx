import Link from 'next/link';
import Image from 'next/image';

import formatPrice from 'utils/formatPrice';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import WishlistButton from 'components/WishlistButton';
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
	ribbon?: React.ReactNode;
	ribbonColor?: RibbonColors;
	ribbonSize?: RibbonSizes;
};

const GameCard = ({
	id,
	slug,
	title,
	developer,
	img,
	price,
	promotionalPrice,
	ribbon,
	ribbonColor = 'primary',
	ribbonSize = 'small'
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
				<Image src={img} alt={title} layout="fill" objectFit="cover" />
			</Style.ImageBox>
		</Link>
		<Style.Content>
			<Link href={`game/${slug}`} passHref>
				<Style.Info>
					<Style.Title>{title}</Style.Title>
					<Style.Developer>{developer}</Style.Developer>
				</Style.Info>
			</Link>
			<Style.FavButton>
				<WishlistButton id={id} />
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
