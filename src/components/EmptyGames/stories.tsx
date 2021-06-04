import { Story, Meta } from '@storybook/react/types-6-0';
import EmptyGames, { EmptyGamesProps } from '.';

export default {
    title: 'EmptyGames',
    component: EmptyGames,
    parameters: {
        backgrounds: {
            default: 'won-dark'
        }
    }
} as Meta;

export const Default: Story<EmptyGamesProps> = (args) => <EmptyGames {...args} />;

Default.args = {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
};
