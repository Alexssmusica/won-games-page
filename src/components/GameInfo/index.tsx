import formatPrice from 'utils/formatPrice';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import * as Style from './styles';
import CartButton from 'components/CartButton';
import WishlistButton from 'components/WishlistButton';

export type GameInfoProps = {
	id: string;
	title: string;
	description: string;
	price: number;
};

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
	<Style.Wrapper data-cy="game-info">
		<Heading color="black" lineBottom>
			{title}
		</Heading>

		<Ribbon color="secondary">{formatPrice(price)}</Ribbon>

		<Style.Description>{description}</Style.Description>

		<Style.ButtonsWrapper>
			<CartButton id={id} size="large" hasText />
			<WishlistButton id={id} size="large" hasText />
		</Style.ButtonsWrapper>
	</Style.Wrapper>
);

export default GameInfo;
