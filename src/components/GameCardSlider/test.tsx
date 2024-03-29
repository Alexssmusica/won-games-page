import 'session.mock';
import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

import GameCardSlider from '.';

const items = [
	{
		id: '1',
		slug: 'Pac-Man',
		title: 'Pac-Man',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x140',
		price: 235,
		promotionalPrice: 215
	},
	{
		id: '2',
		slug: 'Mike Tysons Punch-Out!!',
		title: 'Mike Tysons Punch-Out!!',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x141',
		price: 235,
		promotionalPrice: 215
	},
	{
		id: '3',
		slug: 'R-Type',
		title: 'R-Type',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x142',
		price: 235,
		promotionalPrice: 215
	},
	{
		id: '4',
		slug: 'Wolfenstein 3D',
		title: 'Wolfenstein 3D',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x143',
		price: 235,
		promotionalPrice: 215
	},
	{
		id: '5',
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
		const { container } = render(<GameCardSlider items={items} />);
		expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
	});

	it('should render white arrows if color passed', () => {
		render(<GameCardSlider items={items} color="white" />);

		expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
			color: '#FAFAFA'
		});
		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: '#FAFAFA'
		});
	});
});
