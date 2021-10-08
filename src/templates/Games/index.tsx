import Base from 'templates/Base';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';

import * as Style from './styles';
import { useQueryGames } from '../../hooks/useQueryGames';

export type GamesTemplateProps = {
    games?: GameCardProps[];
    filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
    const { data, loading, fetchMore } = useQueryGames({ variables: { limit: 12 } });

    const handleFilter = () => {
        return;
    };

    const handleShowMore = () => {
        fetchMore({ variables: { limit: 12, start: data?.games.length } });
    };

    return (
        <Base>
            <Style.Main>
                <ExploreSidebar items={filterItems} onFilter={handleFilter} />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <section>
                        <Grid>
                            {data?.games.map((game) => (
                                <GameCard
                                    key={game.slug}
                                    slug={game.slug}
                                    title={game.name}
                                    developer={game.developers[0].name}
                                    img={`http://localhost:1337${game.cover!.url}`}
                                    price={game.price}
                                />
                            ))}
                        </Grid>

                        <Style.ShowMore role="button" onClick={handleShowMore}>
                            <p>Show More</p>
                            <ArrowDown size={35} />
                        </Style.ShowMore>
                    </section>
                )}
            </Style.Main>
        </Base>
    );
};

export default GamesTemplate;
