import Head from 'next/head';
import styles from '@styles/MyOrders.module.css';

export default function MyOrders() {
  return (
		<>
			<Head>
				<title>My Orders</title>
			</Head>
			<div className={styles.Orders}>
				<div className={styles.Orders_container}>
					<h1 className={styles.title}>My orders</h1>
					<div className={styles.Orders_content}>
						
					</div>
				</div>
			</div>
		</>
	);
};