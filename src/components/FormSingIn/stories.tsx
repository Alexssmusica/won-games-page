import { Story, Meta } from '@storybook/react/types-6-0';
import FormSingIn from '.';

export default {
	title: 'Form/FormSingIn',
	component: FormSingIn
} as Meta;

export const Default: Story = (args) => (
	<div style={{ width: 300, margin: 'auto' }}>
		<FormSingIn {...args} />
	</div>
);
