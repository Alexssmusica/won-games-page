import { Add, ShoppingCart } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Radio from 'components/Radio';
import * as Style from './styles';

export type PaymentOptionsProps = {
    cards?: PaymentCard[];
    handlePayment: () => void;
};

export type PaymentCard = {
    number: string;
    flag: string;
    img: string;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
    <Style.Wrapper>
        <Style.Body>
            <Heading color="black" size="small" lineBottom>
                Payment
            </Heading>

            <Style.CardsList>
                {cards?.map((card) => (
                    <Style.CardItem key={card.number}>
                        <Style.CardInfo>
                            <img src={card.img} alt={card.flag} />
                            {card.number}
                        </Style.CardInfo>
                        <Radio name="credit-card" id={card.number} value={card.number} onCheck={() => ({})} />
                    </Style.CardItem>
                ))}

                <Style.AddCard role="button">
                    <Add size={14} /> Add a new credit card
                </Style.AddCard>
            </Style.CardsList>
        </Style.Body>
        <Style.Footer>
            <Button as="a" fullWidth minimal>
                Continue shopping
            </Button>
            <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
                Buy now
            </Button>
        </Style.Footer>
    </Style.Wrapper>
);
export default PaymentOptions;
