import Head from 'next/head';
import Link from 'next/link';
import { Logo } from '@components/Logo.jsx';
import styles from '@styles/PasswordRecovery.module.css';

export default function PasswordRecovery() {
  return (
		<>
			<Head>
				<title>Password Recovery</title>
			</Head>
			<div className={styles.PasswordRecovery}>
				<div className={styles.PasswordRecovery_container}>
					<Logo />
					<h1 className={styles.title}>Password recovery</h1>
					<p className={styles.subtitle}>Inform the email address used to create your account</p>
					<form action="/" className={styles.form}>
						<label htmlFor="email" className={styles.label}>Email address</label>
						<input type="text" id="email" placeholder="youremail@example.com" className={`${styles.input} ${styles.input_email}`} />
						<Link href="/password_recovery/send_email">
							<input type="submit" value="Confirm" className={`${styles.primary_button} ${styles.login_button}`} />
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};