import { useContext } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '@context/AppContext.js';
import styles from '@styles/ProductDetail.module.css';

const ProductDetail = () => {
  const { addToCart, detail, toggleDetail, setToggleDetail } = useContext(AppContext);

  const handleAddToCart = (item) => {
		addToCart(item);
	};

	return (
    <aside className={styles.product_detail}>
      <div className={styles.product_detail_close} onClick={() => setToggleDetail(!toggleDetail)}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <Image src={detail.images[0]} alt={detail.title} width="100%" height="80%" layout="responsive" priority />
      <div className={styles.product_info}>
        <p>${detail.price}</p>
        <p>{detail.title}</p>
        <p>{detail.description}</p>
        <button className={`${styles.primary_button} ${styles.add_to_cart_button}`} onClick={() => handleAddToCart(detail)}>
          <FontAwesomeIcon icon={faCartPlus} className={styles.add_icon} />
          Add to cart
        </button>
      </div>
    </aside>
	);
};

export { ProductDetail };