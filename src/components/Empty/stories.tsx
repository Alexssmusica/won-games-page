import { Story, Meta } from '@storybook/react/types-6-0';
import Empty, { EmptyProps } from '.';

export default {
	title: 'Empty',
	component: Empty,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	},
	argTypes: {
		img: {
			type: ''
		}
	}
} as Meta;

export const Empty1: Story<EmptyProps> = (args) => <Empty {...args} />;

Empty1.args = {
	title: 'Your wishlist is empty',
	img: '/img/empty.svg',
	description: 'Games added to your wishlist will appear here',
	hasLink: true
};

export const Empty2: Story<EmptyProps> = (args) => <Empty {...args} />;

Empty2.args = {
	title: 'Your wishlist is empty',
	img: '/img/empty-game.svg',
	description: 'Games added to your wishlist will appear here',
	hasLink: true
};
