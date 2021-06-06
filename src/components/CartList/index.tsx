import React from 'react';
import GameItem, { GameItemProps } from '../GameItem';

import * as Style from './styles';

export type CartListProps = {
    items: GameItemProps[];
    total: string;
};

const CartList = ({ items, total }: CartListProps) => (
    <Style.Wrapper>
        {items.map((item) => (
            <GameItem key={item.title} {...item} />
        ))}

        <Style.Footer>
            Total <Style.Total>{total}</Style.Total>
        </Style.Footer>
    </Style.Wrapper>
);

export default CartList;
