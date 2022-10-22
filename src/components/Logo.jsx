import Image from 'next/image';
import Link from 'next/link';
import yardSale from '@logos/logo_yard_sale.svg';
import styles from '@styles/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.Logo_container}>
      <Link href="/" as="/" passHref>
      <a>
        <Image src={yardSale} alt="logo" width={200} height={50} priority={true} />
      </a>
      </Link>
    </div>
  );
};

export { Logo };