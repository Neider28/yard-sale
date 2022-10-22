import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { OrderItem } from '@components/OrderItem.jsx';
import { EmptyCart } from '@components/EmptyCart.jsx';
import { AppContext } from '@context/AppContext.js';
import styles from '@styles/Checkout.module.css';

export default function Checkout() {
	const { state, handleSumTotal, handleTotalItems } = useContext(AppContext);

	return (
		<>
			<Head>
				<title>Checkout {`(${handleTotalItems()})`}</title>
			</Head>
			<div className={styles.Checkout}>
				<div className={styles.Checkout_container}>
					<h1 className={styles.title}>My order</h1>
				</div>
				{
					handleTotalItems() > 0 ? (
						<div className={styles.Checkout_content}>
							<div className={styles.order}>
								<p>
									<span>03.25.21</span>
									<span>{handleTotalItems()} articles</span>
								</p>
								<p>${handleSumTotal()}</p>
							</div>
							{
								state.cart.map((product) => (
									<OrderItem product={product} key={`order${product.id}`} />
								))
							}
						</div>
					) : (
						<EmptyCart />
					)
				}
			</div>
		</>
	);
};