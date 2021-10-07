import { gql } from '@apollo/client';
import { GameFragment } from './fragments/game';
import { HighlightFragment } from './fragments/highlight';

export const GET_RECOMMENDED = gql`
    query GetRecommended {
        recommended {
            section {
                title
                highlight {
                    ...HighlightFragment
                }
                games {
                    ...GameFragment
                }
            }
        }
    }
    ${GameFragment}
    ${HighlightFragment}
`;
