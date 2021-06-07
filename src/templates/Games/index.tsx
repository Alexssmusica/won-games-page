import Base from 'templates/Base';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';

import * as Style from './styles';

export type GamesTemplateProps = {
    games?: GameCardProps[];
    filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => {
    const handleFilter = () => {
        return;
    };

    const handleShowMore = () => {
        return;
    };

    return (
        <Base>
            <Style.Main>
                <ExploreSidebar items={filterItems} onFilter={handleFilter} />

                <section>
                    <Grid>
                        {games.map((item) => (
                            <GameCard key={item.title} {...item} />
                        ))}
                    </Grid>

                    <Style.ShowMore role="button" onClick={handleShowMore}>
                        <p>Show More</p>
                        <ArrowDown size={35} />
                    </Style.ShowMore>
                </section>
            </Style.Main>
        </Base>
    );
};

export default GamesTemplate;
