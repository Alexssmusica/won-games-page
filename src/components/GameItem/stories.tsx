import { Story, Meta } from '@storybook/react/types-6-0';
import formatPrice from 'utils/formatPrice';
import GameItem, { GameItemProps } from '.';

export default {
	title: 'GameItem',
	component: GameItem,
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/151x70',
		title: 'Red Dead Redemption 2',
		price: formatPrice(215)
	}
} as unknown as Meta<GameItemProps>;

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />;

export const WithPayment: Story<GameItemProps> = (args) => <GameItem {...args} />;

WithPayment.args = {
	downloadLink: 'https://wongames.com/game/download/21312ndasd',
	paymentInfo: {
		flag: 'mastercard',
		img: '/img/master-card.png',
		number: '**** **** **** 4326',
		purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
	}
};
