import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth.js';
import styles from '@styles/MyAccount.module.css';

export default function MyAccount() {
	const auth = useAuth();

  return (
		<>
			<Head>
				<title>My Account</title>
			</Head>
			<div className={styles.MyAccount}>
				<div className={styles.MyAccount_container}>
					<h1 className={styles.title}>My account</h1>
					<form action="/" className={styles.form}>
						<div>
							<label htmlFor="name" className={styles.label}>Name</label>
							<p className={styles.value}>{auth?.user?.name}</p>
							<label htmlFor="email"className={styles.label}>Email</label>
							<p className={styles.value}>{auth?.user?.email}</p>
							<label htmlFor="password" className={styles.label}>Password</label>
							<p className={styles.value}>{auth?.user?.password}</p>
						</div>
						<Link href="/edit_account">
							<input type="submit" value="Edit" className={`${styles.secondary_button} ${styles.login_button}`} />
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};