import { gql, QueryHookOptions, useQuery } from '@apollo/client';
import { GetGames, GetGamesVariables } from '../generated/GetGames';

export const GET_GAMES = gql`
    query GetGames($limit: Int!, $start: Int) {
        games(limit: $limit, start: $start) {
            name
            slug
            cover {
                url
            }
            developers {
                name
            }
            price
        }
    }
`;

export const GET_GAME_BY_SLUG = gql`
    query GetGameBySlug($slug: String!) {
        games(where: { slug: $slug }) {
            name
            short_description
            description
            price
            rating
            release_date
            gallery {
                src: url
                label: alternativeText
            }
            cover {
                src: url
            }
            developers {
                name
            }
            publisher {
                name
            }
            categories {
                name
            }
            platforms {
                name
            }
        }
    }
`;

export function useQueryGames(options?: QueryHookOptions<GetGames, GetGamesVariables>) {
    return useQuery<GetGames, GetGamesVariables>(GET_GAMES, options);
}
