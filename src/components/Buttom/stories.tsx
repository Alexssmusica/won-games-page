import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Buttom from '.';

export default {
    title: 'Buttom',
    component: Buttom,
    argTypes: {
        children: {
            type: 'string'
        },
        icon: {
            type: ''
        }
    }
} as Meta;

export const Default: Story = (args) => <Buttom {...args} />;
export const withIcon: Story = (args) => <Buttom {...args} />;

Default.args = {
    children: 'Buy now'
};

withIcon.args = {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
};
