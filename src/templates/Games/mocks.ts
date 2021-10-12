import { GET_GAMES } from 'graphql/queries/games';

export const gamesMock = {
    request: {
        query: GET_GAMES,
        variables: { limit: 12, where: {} }
    },
    result: {
        data: {
            games: [
                {
                    name: 'Sample Game',
                    slug: 'sample-game',
                    price: 518.39,
                    developers: [{ name: 'sample developer' }],
                    cover: {
                        url: 'sample-game.jpg'
                    },
                    __typename: 'Game'
                }
            ]
        }
    }
};

export const fetchMoreMock = {
    request: {
        query: GET_GAMES,
        variables: { limit: 12, where: {}, start: 1 }
    },
    result: {
        data: {
            games: [
                {
                    name: 'Fetch More Game',
                    slug: 'fetch-more',
                    price: 518.39,
                    developers: [{ name: 'sample developer' }],
                    cover: {
                        url: 'sample-game.jpg'
                    },
                    __typename: 'Game'
                }
            ]
        }
    }
};
