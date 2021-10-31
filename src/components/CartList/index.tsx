import React from 'react';
import Link from 'next/link';
import GameItem, { GameItemProps } from 'components/GameItem';
import Button from 'components/Button';

import * as Style from './styles';
import Empty from 'components/Empty';

export type CartListProps = {
    items?: GameItemProps[];
    total?: string;
    hasButton?: boolean;
};

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
    <Style.Wrapper isEmpty={!items.length}>
        {items.length ? (
            <>
                {items.map((item) => (
                    <GameItem key={item.title} {...item} />
                ))}

                <Style.Footer>
                    {!hasButton && <span>Total:</span>}
                    <Style.Total>{total}</Style.Total>
                    {hasButton && (
                        <Link href="/cart" passHref>
                            <Button as="a">Buy it now</Button>
                        </Link>
                    )}
                </Style.Footer>
            </>
        ) : (
            <Empty
                img="/img/empty.svg"
                title="Your cart is empty"
                description="Go back to the store and explore great games and offers."
                hasLink
            />
        )}
    </Style.Wrapper>
);

export default CartList;
