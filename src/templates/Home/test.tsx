import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
	banners: bannerMock,
	newGames: gamesMock,
	newGamesTitle: 'New Games',
	mostPopularHighlight: highlightMock,
	mostPopularGamesTitle: 'Most Popular Games',
	mostPopularGames: gamesMock,
	upcomingGames: gamesMock,
	upcomingGamesTitle: 'Upcoming Games',
	upcomingHighlight: highlightMock,
	freeGamesTitle: 'Free Games',
	freeGames: gamesMock,
	freeHighlight: highlightMock
};

jest.mock('templates/Base', () => ({
	__esModule: true,
	default: function Mock({ children }: { children: React.ReactNode }) {
		return <div data-testid="Mock Base">{children}</div>;
	}
}));

jest.mock('components/Showcase', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock Showcase"></div>;
		}
	};
});

jest.mock('components/BannerSlider', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock Banner Slider"></div>;
		}
	};
});

describe('<Home />', () => {
	it('should render Banner and Showcase', () => {
		render(<Home {...props} />);

		expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument();
		expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4);
	});
});
