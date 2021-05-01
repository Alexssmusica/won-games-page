import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        onCheck: { action: 'checked' }
    },
    args: {
        isChecked: true
    }
} as Meta;

export const Default: Story<CheckboxProps> = (args) => <Checkbox isChecked {...args} />;
