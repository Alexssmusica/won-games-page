import { Story, Meta } from '@storybook/react/types-6-0';
import GameSlider from '.';

export default {
    title: 'GameSlider',
    component: GameSlider
} as Meta;

export const Default: Story = (args) => <GameSlider {...args} />;
