import { Download } from '@styled-icons/boxicons-solid/Download';
import formatPrice from '../../utils/formatPrice';

import * as Style from './styles';

export type PaymentInfoProps = {
    number: string;
    flag: string;
    img: string;
    purchaseDate: string;
};

export type GameItemProps = {
    img: string;
    title: string;
    price: number;
    downloadLink?: string;
    paymentInfo?: PaymentInfoProps;
};

const GameItem = ({ img, title, price, downloadLink, paymentInfo }: GameItemProps) => (
    <Style.Wrapper>
        <Style.GameContent>
            <Style.ImageBox>
                <img src={img} alt={title} />
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
                <Style.Price>{formatPrice(price)}</Style.Price>
            </Style.Content>
        </Style.GameContent>

        {!!paymentInfo && (
            <Style.PaymentContent>
                <p>{paymentInfo.purchaseDate}</p>
                <Style.CardInfo>
                    <span>{paymentInfo.number}</span>
                    <img src={paymentInfo.img} alt={paymentInfo.flag} />
                </Style.CardInfo>
            </Style.PaymentContent>
        )}
    </Style.Wrapper>
);

export default GameItem;
