import { render, screen } from '@testing-library/react';

import GameSlider from '.';

describe('<GameSlider />', () => {
    it('should render the heading', () => {
        render(<GameSlider />);

        expect(screen.getByRole('heading', { name: /GameSlider/i })).toBeInTheDocument();
    });
});
