import Image from 'next/image';
import { Download } from '@styled-icons/boxicons-solid/Download';
import { useCart } from 'hooks/use-cart';

import * as Style from './styles';

export type PaymentInfoProps = {
	number: string;
	flag: string | null;
	img: string | null;
	purchaseDate: string;
};

export type GameItemProps = {
	id: string;
	img: string;
	title: string;
	price: number;
	downloadLink?: string;
	paymentInfo?: PaymentInfoProps;
};

const GameItem = ({ id, img, title, price, downloadLink, paymentInfo }: GameItemProps) => {
	const { isInCart, removeFromCart } = useCart();

	return (
		<Style.Wrapper data-cy="game-item">
			<Style.GameContent>
				<Style.ImageBox>
					<Image src={img} alt={title} layout="fill" object-fit="cover" />
				</Style.ImageBox>

				<Style.Content>
					<Style.Title>
						{title}
						{!!downloadLink && (
							<Style.DownloadLink href={downloadLink} target="_blank" aria-label={`Get ${title} here`}>
								<Download size={22} />
							</Style.DownloadLink>
						)}
					</Style.Title>
					<Style.Group>
						<Style.Price>{price}</Style.Price>
						{isInCart(id) && <Style.Remove onClick={() => removeFromCart(id)}>Remove</Style.Remove>}
					</Style.Group>
				</Style.Content>
			</Style.GameContent>

			{!!paymentInfo && (
				<Style.PaymentContent>
					<p>{paymentInfo.purchaseDate}</p>
					<Style.CardInfo>
						<span>{paymentInfo.number}</span>
						{!!paymentInfo.img && !!paymentInfo.flag && (
							<img src={paymentInfo.img} alt={paymentInfo.flag} />
						)}
					</Style.CardInfo>
				</Style.PaymentContent>
			)}
		</Style.Wrapper>
	);
};

export default GameItem;
