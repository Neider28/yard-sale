import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Logo } from '@components/Logo.jsx';
import styles from '@styles/EditAccount.module.css';

export default function EditAccount() {
  return (
		<>
			<Head>
				<title>Edit Account</title>
			</Head>
			<div className={styles.NewPassword}>
				<div className={styles.NewPassword_container}>
					<Logo />
					<h1 className={styles.title}>Create a new password</h1>
					<p className={styles.subtitle}>Enter a new password for your account</p>
					<form action="/" className={styles.form}>
						<label htmlFor="password" className={styles.label}>Password</label>
						<input type="password" id="password" placeholder="*********" className={`${styles.input} ${styles.input_password}`} />
						<label htmlFor="new-password" className={styles.label}>Password</label>
						<input type="password" id="new-password" placeholder="*********" className={`${styles.input} ${styles.input_password}`} />
						<input type="submit" value="Confirm" className={`${styles.primary_button} ${styles.login_button}`} />
					</form>
				</div>
			</div>
		</>
	);
};