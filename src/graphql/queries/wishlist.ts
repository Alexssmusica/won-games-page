import { gql } from '@apollo/client';
import { GameFragment } from 'graphql/fragments/game';

export const GET_WISHLIST = gql`
	query GetWishlist($identifier: String!) {
		wishlists(where: { user: { email: $identifier } }) {
			id
			games {
				...GameFragment
			}
		}
	}
	${GameFragment}
`;
