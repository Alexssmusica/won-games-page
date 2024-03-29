import { Story, Meta } from '@storybook/react/types-6-0';
import Dropdown from '.';
import { DropdownProps } from '.';

export default {
	title: 'Dropdown',
	component: Dropdown,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta<DropdownProps>;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;

Default.args = {
	title: 'Dropdown',
	children: 'Content'
};
