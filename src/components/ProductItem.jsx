import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { ProductDetail } from '@containers/ProductDetail.jsx';
import { AppContext } from '@context/AppContext.js';
import styles from '@styles/ProductItem.module.css';

const ProductItem = ({ product }) => {
	const { addToCart, setDetail, toggleDetail, setToggleDetail } = useContext(AppContext);

	const handleAddToCart = (item) => {
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			<div onClick={() => {
				setToggleDetail(true);
				setDetail(product);
			}}>
				<Image src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive" priority />
			</div>
			<div className={styles.product_info}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleAddToCart(product)}>
					<FontAwesomeIcon icon={faCartPlus} className={styles.Add_icon} />
				</figure>
			</div>
			{toggleDetail && <ProductDetail />}
		</div>
	);
}

export { ProductItem };