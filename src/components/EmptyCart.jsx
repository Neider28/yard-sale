import Image from 'next/image';
import empty from '@logos/empty_cart.png';
import styles from '@styles/EmptyCart.module.css';

const EmptyCart = () => {
  return (
    <figure className={styles.Empty_container}>
      <Image src={empty} alt="empty" />
      <p>Upps, empty cart</p>
    </figure>
  );
};

export { EmptyCart };