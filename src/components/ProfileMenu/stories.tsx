import { Story, Meta } from '@storybook/react/types-6-0';
import ProfileMenu, { ProfileMenuProps } from '.';

export default {
	title: 'ProfileMenu',
	component: ProfileMenu,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	},
	argTypes: {
		activeLink: {
			control: {
				type: 'select',
				options: ['/profile/me', '/profile/orders']
			}
		}
	}
} as Meta<ProfileMenuProps>;

export const Default: Story<ProfileMenuProps> = (args) => <ProfileMenu {...args} />;
