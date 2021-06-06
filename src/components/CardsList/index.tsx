import Heading from '../Heading';
import { PaymentCard } from '../PaymentOptions';
import * as Style from './styles';

export type CardsListProps = {
    cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => (
    <>
        <Heading lineBottom color="black" size="small">
            My cards
        </Heading>

        {cards?.map((card) => (
            <Style.Card key={card.number}>
                <img src={card.img} alt={card.flag} />
                <span>{card.number}</span>
            </Style.Card>
        ))}
    </>
);

export default CardsList;
