import { useContext } from 'react';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth.js';
import { AppContext } from '@context/AppContext.js';
import styles from '@styles/Menu.module.css';

const Menu = () => {
	const { toggle, setToggle } = useContext(AppContext);
	const auth = useAuth();

	 const handleToggle = () => {
    setToggle(!toggle);
  };

	return (
		<div className={styles.Menu}>
			<ul>
				<li onClick={handleToggle}>
					<Link href="/my_orders" className={styles.title}>My orders</Link>
				</li>
				<li onClick={handleToggle}>
					<Link href="/my_account">My account</Link>
				</li>
				<li onClick={handleToggle}>
					<span onClick={() => auth.signOut()}>Sign out</span>
				</li>
			</ul>
		</div>
	);
};

export { Menu };