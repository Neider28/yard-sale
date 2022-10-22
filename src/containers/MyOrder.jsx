import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { OrderItem } from '@components/OrderItem.jsx';
import { EmptyCart } from '@components/EmptyCart.jsx';
import { AppContext } from '@context/AppContext.js';
import styles from '@styles/MyOrder.module.css';

const MyOrder = () => {
	const { state, handleToggleOrder, handleSumTotal, handleTotalItems } = useContext(AppContext);

	return (
		<aside className={styles.MyOrder}>
			<div className={styles.title_container}>
				<FontAwesomeIcon icon={faAngleLeft} onClick={handleToggleOrder} />
				<p className={styles.title}>My order</p>
			</div>
			{
				handleTotalItems() > 0 ? (
					<div className={styles.my_order_content}>
						{
							state.cart.map((product) => (
								<OrderItem product={product} key={`order${product.id}`} />
							))
						}
						<div className={styles.order}>
							<p>
								<span>Total</span>
							</p>
							<p>${handleSumTotal()}</p>
						</div>
						<Link href="/checkout">
							<button onClick={handleToggleOrder} className={styles.primary_button}>
								Checkout
							</button>
						</Link>
					</div>
				) : (
					<EmptyCart />
				)
			}
		</aside>
	);
};

export { MyOrder };