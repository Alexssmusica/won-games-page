import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCardSlider from '.';

const items = [
	{
		slug: 'Pac-Man',
		title: 'Pac-Man',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x140',
		price: 235,
		promotionalPrice: 215
	},
	{
		slug: 'Mike Tysons Punch-Out!!',
		title: 'Mike Tysons Punch-Out!!',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x141',
		price: 235,
		promotionalPrice: 215
	},
	{
		slug: 'R-Type',
		title: 'R-Type',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x142',
		price: 235,
		promotionalPrice: 215
	},
	{
		slug: 'Wolfenstein 3D',
		title: 'Wolfenstein 3D',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x143',
		price: 235,
		promotionalPrice: 215
	},
	{
		slug: 'Population Zero',
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 235,
		promotionalPrice: 215
	}
];

describe('<GameSlider />', () => {
	it('should render with 4 active items', () => {
		const { container } = renderWithTheme(<GameCardSlider items={items} />);
		expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
	});

	it('should render white arrows if color passed', () => {
		renderWithTheme(<GameCardSlider items={items} color="white" />);

		expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
			color: '#FAFAFA'
		});
		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: '#FAFAFA'
		});
	});
});
