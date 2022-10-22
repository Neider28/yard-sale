import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '@context/AppContext.js';
import { useAuth } from '@hooks/useAuth.js';
import styles from '@styles/MenuMobile.module.css';

const MenuMobile = () => {
  const { toggleMobile, setToggleMobile } = useContext(AppContext);
  const auth = useAuth();
  const router = useRouter();

  const handleToggleMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  const handleLogIn = () => {
    router.push('/login');
  };

  return (
    <div className={styles.mobile_menu}>
      <span><FontAwesomeIcon icon={faXmark} className={styles.close_icon} onClick={handleToggleMobile} /></span>
      <ul className={styles.menu_categories}>
        <li><a href="/">CATEGORIES</a></li>
        <li><a href="/">All</a></li>
        <li><a href="/">Clothes</a></li>
        <li><a href="/">Electronics</a></li>
        <li><a href="/">Furnitures</a></li>
        <li><a href="/">Shoes</a></li>
        <li><a href="/">Other</a></li>
      </ul>
      {
        auth.user ?
          <ul>
            <li onClick={handleToggleMobile}><Link href="/my_orders">My orders</Link></li>
            <li onClick={handleToggleMobile}><Link href="/my_account">My account</Link></li>
          </ul>
        :
          null
      }
      <ul>
        {
          auth.user ? 
            <>
              <li className={styles.email}>
                {auth?.user?.email}
              </li>
              <li onClick={handleToggleMobile}><span className={styles.sign_out} onClick={() => auth.signOut()}>Sign out</span></li>
            </>
          : 
            <li className={styles.log_in} onClick={handleLogIn}>Log In</li>
        }
      </ul>
    </div>
  )
}

export { MenuMobile };