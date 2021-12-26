import { QueryHookOptions, useQuery } from '@apollo/client';
import { GetWishlist, GetWishlistVariables } from 'graphql/generated/GetWishlist';
import { GET_WISHLIST } from 'graphql/queries/wishlist';

export function useQueryWishlist(options?: QueryHookOptions<GetWishlist, GetWishlistVariables>) {
	return useQuery<GetWishlist, GetWishlistVariables>(GET_WISHLIST, options);
}
