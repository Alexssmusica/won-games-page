import { Story, Meta } from '@storybook/react/types-6-0';
import FormProfile, { FormProfileProps } from '.';

export default {
	title: 'Form/FormProfile',
	component: FormProfile
} as Meta<FormProfileProps>;

export const Default: Story = () => (
	<div style={{ maxWidth: 860, margin: 'auto' }}>
		<FormProfile />
	</div>
);
