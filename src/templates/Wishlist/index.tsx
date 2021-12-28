import { useWishlist } from 'hooks/use-wishlist';
import GameCard, { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import { Grid } from 'components/Grid';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import Empty from 'components/Empty';
import Base from 'templates/Base';
import Loader from 'components/Loader';

import * as Style from './styles';

export type WishlistTemplateProps = {
	recommendedGames: GameCardProps[];
	recommendedHighlight: HighlightProps;
	recommendedTitle: string;
};

const Wishlist = ({ recommendedGames, recommendedHighlight, recommendedTitle }: WishlistTemplateProps) => {
	const { items, loading } = useWishlist();

	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary">
					Wishlist
				</Heading>
				{loading ? (
					<Style.Loading>
						<Loader />
					</Style.Loading>
				) : items.length ? (
					<Grid>
						{items?.map((game, index) => (
							<GameCard key={`wishlist-${index}`} {...game} />
						))}
					</Grid>
				) : (
					<Empty
						img="/img/empty-game.svg"
						title="Your wishlist is empty"
						description="Games added to your wishlist will appear here"
						hasLink
					/>
				)}

				<Divider />
			</Container>

			<Showcase title={recommendedTitle} games={recommendedGames} highlight={recommendedHighlight} />
		</Base>
	);
};

export default Wishlist;
