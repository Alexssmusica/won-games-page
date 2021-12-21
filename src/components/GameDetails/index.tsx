import { Apple, Windows, Linux } from '@styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';
import * as Style from './styles';

type Platform = 'windows' | 'linux' | 'mac';

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
	developer: string;
	publisher: string;
	platforms: Platform[];
	releaseDate: string;
	rating: Rating;
	genres: string[];
};

const GameDetails = ({ developer, publisher, releaseDate, platforms, rating, genres }: GameDetailsProps) => {
	const platformIcons = {
		linux: <Linux title="Linux" size={18} />,
		mac: <Apple title="Mac" size={18} />,
		windows: <Windows title="Windows" size={18} />
	};

	return (
		<Style.Wrapper>
			<MediaMatch greaterThan="small">
				<Heading lineLeft lineColor="secondary">
					Game Details
				</Heading>
			</MediaMatch>

			<Style.Content>
				<Style.Block>
					<Style.Label>Developer</Style.Label>
					<Style.Description>{developer}</Style.Description>
				</Style.Block>

				<Style.Block>
					<Style.Label>Release Date</Style.Label>
					<Style.Description>
						{new Intl.DateTimeFormat('en-US', {
							day: 'numeric',
							month: 'short',
							year: 'numeric'
						}).format(new Date(releaseDate))}
					</Style.Description>
				</Style.Block>

				<Style.Block>
					<Style.Label>Platforms</Style.Label>
					<Style.IconsWrapper>
						{platforms.map((icon: Platform) => (
							<Style.Icon key={icon}>{platformIcons[icon]}</Style.Icon>
						))}
					</Style.IconsWrapper>
				</Style.Block>

				<Style.Block>
					<Style.Label>Publisher</Style.Label>
					<Style.Description>{publisher}</Style.Description>
				</Style.Block>

				<Style.Block>
					<Style.Label>Rating</Style.Label>
					<Style.Description>{rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}</Style.Description>
				</Style.Block>

				<Style.Block>
					<Style.Label>Genres</Style.Label>
					<Style.Description>{genres.join(' / ')}</Style.Description>
				</Style.Block>
			</Style.Content>
		</Style.Wrapper>
	);
};

export default GameDetails;
