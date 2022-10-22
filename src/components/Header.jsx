import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@components/Menu.jsx';
import { MenuMobile } from '@components/MenuMobile.jsx';
import { MyOrder } from '@containers/MyOrder.jsx';
import menu from '@icons/icon_menu.svg';
import yardSale from '@logos/logo_yard_sale.svg';
import { AppContext } from '@context/AppContext.js';
import { useAuth } from '@hooks/useAuth.js';
import styles from '@styles/Header.module.css';

const Header = () => {
  const { state, toggleOrder, handleToggleOrder, handleTotalItems, toggleMobile, setToggleMobile, toggle, setToggle } = useContext(AppContext);
  const auth = useAuth();
  const router = useRouter();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  const handleLogIn = () => {
    router.push('/login');
  };

  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav_cont}>
        <Image src={menu} alt="menu" className={styles.menu_logo} onClick={handleToggleMobile} />
        <div className={styles.navbar_left}>
          <Link href="/" as="/" passHref>
            <a>
              <Image src={yardSale} alt="logo" className={styles.nav_logo} priority={true} />
            </a>
          </Link>
          <ul>
            <li><a href="/">All</a></li>
            <li><a href="/">Clothes</a></li>
            <li><a href="/">Electronics</a></li>
            <li><a href="/">Furnitures</a></li>
            <li><a href="/">Shoes</a></li>
            <li><a href="/">Others</a></li>
          </ul>
        </div>
        <div className={styles.navbar_right}>
          <ul>
            {
              auth.user ? 
                <li className={styles.navbar_email} onClick={handleToggle}>
                  {auth?.user?.email}
                </li>
              : 
                <li className={styles.navbar_log_in} onClick={handleLogIn}>Log In</li>
            }
            <li className={styles.navbar_shopping_cart} onClick={handleToggleOrder}>
              <FontAwesomeIcon icon={faCartShopping} className={styles.cart_icon} />
              {state.cart.length > 0 ? <div>{handleTotalItems()}</div> : null}
            </li>
          </ul>
        </div>
      </div>
      {toggle && <Menu />}
      {toggleMobile && <MenuMobile />}
      {toggleOrder && <MyOrder />}
    </nav>
  );
};

export { Header };