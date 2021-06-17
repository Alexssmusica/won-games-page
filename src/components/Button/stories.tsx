import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Button from '.';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            type: 'string'
        },
        icon: {
            type: ''
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        }
    }
} as Meta;

export const Default: Story = (args) => <Button {...args} />;
export const withIcon: Story = (args) => <Button {...args} />;
export const asLink: Story = (args) => <Button {...args} />;

Default.args = {
    size: 'medium',
    children: 'Buy now'
};

withIcon.args = {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
};

asLink.args = {
    size: 'large',
    children: 'Buy now',
    as: 'a',
    href: '/link'
};
