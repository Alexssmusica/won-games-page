import { Download } from '@styled-icons/boxicons-solid/Download';

import * as Style from './styles';

export type GameItemProps = {
    img: string;
    title: string;
    price: string;
    downloadLink?: string;
};

const GameItem = ({ img, title, price, downloadLink }: GameItemProps) => (
    <Style.Wrapper>
        <Style.GameContent>
            <Style.ImageBox>
                <img src={img} alt={title} />
            </Style.ImageBox>

            <Style.Content>
                <Style.Title>
                    {title}{' '}
                    {!!downloadLink && (
                        <Style.DownloadLink href={downloadLink} target="_blank" aria-label={`Get ${title} here`}>
                            <Download size={22} />
                        </Style.DownloadLink>
                    )}
                </Style.Title>
                <Style.Price>{price}</Style.Price>
            </Style.Content>
        </Style.GameContent>
    </Style.Wrapper>
);

export default GameItem;
