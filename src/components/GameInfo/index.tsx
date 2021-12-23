import { FavoriteBorder } from '@styled-icons/material-outlined';
import formatPrice from 'utils/formatPrice';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import * as Style from './styles';
import CartButton from 'components/CartButton';

export type GameInfoProps = {
	id: string;
	title: string;
	description: string;
	price: number;
};

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
	<Style.Wrapper>
		<Heading color="black" lineBottom>
			{title}
		</Heading>

		<Ribbon color="secondary">{formatPrice(price)}</Ribbon>

		<Style.Description>{description}</Style.Description>

		<Style.ButtonsWrapper>
			<CartButton id={id} size="large" hasText />
			<Button icon={<FavoriteBorder />} size="large" minimal>
				Wishlist
			</Button>
		</Style.ButtonsWrapper>
	</Style.Wrapper>
);

export default GameInfo;
