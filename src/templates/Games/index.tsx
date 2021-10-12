import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import { parseQueryStringToFilter, parseQueryStringToWhere } from '../../utils/filter';
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import { useQueryGames } from '../../hooks/useQueryGames';
import { Grid } from 'components/Grid';
import GameCard from 'components/GameCard';
import Base from 'templates/Base';

import * as Style from './styles';
import Empty from '../../components/Empty';

export type GamesTemplateProps = {
    filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
    const { push, query } = useRouter();

    const { data, loading, fetchMore } = useQueryGames({
        notifyOnNetworkStatusChange: true,

        variables: {
            limit: 12,
            where: parseQueryStringToWhere({ queryString: query, filterItems }),
            sort: query.sort as string | null
        }
    });

    const handleFilter = (items: ParsedUrlQueryInput) => {
        push({
            pathname: '/games',
            query: items
        });

        return;
    };

    const handleShowMore = () => {
        fetchMore({ variables: { limit: 12, start: data?.games.length } });
    };

    return (
        <Base>
            <Style.Main>
                <ExploreSidebar
                    initialValues={parseQueryStringToFilter({ queryString: query, filterItems })}
                    items={filterItems}
                    onFilter={handleFilter}
                />

                <section>
                    {data?.games.length ? (
                        <>
                            <Grid>
                                {data?.games.map((game) => (
                                    <GameCard
                                        key={game.slug}
                                        title={game.name}
                                        slug={game.slug}
                                        developer={game.developers[0].name}
                                        img={`http://localhost:1337${game.cover!.url}`}
                                        price={game.price}
                                    />
                                ))}
                            </Grid>
                            <Style.ShowMore>
                                {loading ? (
                                    <Style.ShowMoreLoading src="/img/dots.svg" alt="Loading more games..." />
                                ) : (
                                    <Style.ShowMoreButton role="button" onClick={handleShowMore}>
                                        <p>Show More</p>
                                        <ArrowDown size={35} />
                                    </Style.ShowMoreButton>
                                )}
                            </Style.ShowMore>
                        </>
                    ) : (
                        <Empty
                            img="/img/empty.svg"
                            title=":("
                            description="We didn't find any games with this filter"
                            hasLink
                        />
                    )}
                </section>
            </Style.Main>
        </Base>
    );
};

export default GamesTemplate;
