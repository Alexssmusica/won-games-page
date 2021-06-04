import * as Style from './styles';

export type GameItemProps = {
    img: string;
    title: string;
    price: string;
};

const GameItem = ({ img, title, price }: GameItemProps) => (
    <Style.Wrapper>
        <Style.GameContent>
            <Style.ImageBox>
                <img src={img} alt={title} />
            </Style.ImageBox>

            <Style.Content>
                <Style.Title>{title}</Style.Title>
                <Style.Price>{price}</Style.Price>
            </Style.Content>
        </Style.GameContent>
    </Style.Wrapper>
);

export default GameItem;
