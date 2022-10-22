import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { AppContext } from '@context/AppContext';
import styles from '@styles/OrderItem.module.css';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width="100%" height="100%" layout="responsive" />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<span>{product.qty}</span>
			<FontAwesomeIcon icon={faXmark} onClick={() => handleRemove(product)} />
		</div>
	);
};

export { OrderItem };