import { gql } from '@apollo/client';
import { BannerFragment } from './fragments/banner';
import { GameFragment } from './fragments/game';
import { HighlightFragment } from './fragments/highlight';

export const QUERY_HOME = gql`
    query QueryHome {
        banners {
            ...BannerFragment
        }
        newGames: games(where: { release_date_lte: "2021-10-04" }, sort: "release_date:desc", limit: 8) {
            ...GameFragment
        }
        upcomingGames: games(where: { release_date_gt: "2021-10-04" }, sort: "release_date:asc", limit: 8) {
            ...GameFragment
        }
        freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 8) {
            ...GameFragment
        }

        sections: home {
            newGames {
                title
                highlight {
                    ...HighlightFragment
                }
            }
            popularGames {
                title
                highlight {
                    ...HighlightFragment
                }
                games {
                    ...GameFragment
                }
            }
            upcomingGames {
                title
                highlight {
                    ...HighlightFragment
                }
            }
            freeGames {
                title
                highlight {
                    ...HighlightFragment
                }
            }
        }
    }

    ${BannerFragment}
    ${GameFragment}
    ${HighlightFragment}
`;
