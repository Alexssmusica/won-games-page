import React from 'react';
import Link from 'next/link';
import GameItem, { GameItemProps } from '../GameItem';
import Button from '../Button';

import * as Style from './styles';

export type CartListProps = {
    items: GameItemProps[];
    total: string;
    hasButton?: boolean;
};

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
    <Style.Wrapper>
        {items.map((item) => (
            <GameItem key={item.title} {...item} />
        ))}

        <Style.Footer>
            {!hasButton && <span>Total:</span>}
            <Style.Total>{total}</Style.Total>
            {hasButton && (
                <Link href="/cart">
                    <Button as="a">Buy it now</Button>
                </Link>
            )}
        </Style.Footer>
    </Style.Wrapper>
);

export default CartList;
