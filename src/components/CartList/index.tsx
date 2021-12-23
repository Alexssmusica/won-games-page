import React from 'react';
import Link from 'next/link';
import GameItem from 'components/GameItem';
import Loader from 'components/Loader';
import Button from 'components/Button';

import * as Style from './styles';
import Empty from 'components/Empty';
import { useCart } from 'hooks/use-cart';

export type CartListProps = {
	hasButton?: boolean;
};

const CartList = ({ hasButton = false }: CartListProps) => {
	const { items, total, loading } = useCart();

	if (loading) {
		return (
			<Style.Loading>
				<Loader />
			</Style.Loading>
		);
	}

	return (
		<Style.Wrapper isEmpty={!items.length}>
			{items.length ? (
				<>
					<Style.GamesList>
						{items.map((item) => (
							<GameItem key={item.title} {...item} />
						))}
					</Style.GamesList>

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
};

export default CartList;
