import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import email from '@icons/email.svg';
import { Logo } from '@components/Logo.jsx';
import styles from '@styles/SendEmail.module.css';

export default function SendEmail() {
  return (
		<>
			<Head>
				<title>Send Email | Yard Sale</title>
			</Head>
			<div className={styles.SendEmail}>
				<div className={styles.form_container}>
					<Logo />
					<h1 className={styles.title}>Email has been sent!</h1>
					<p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
					<div className={styles.email_image}>
						<Image src={email} alt="email" />
					</div>
					<Link href="/login">
						<button className={`${styles.primary_button} ${styles.login_button}`}>Login</button>
					</Link>
					<p className={styles.resend}>
						<span>Didn't receive the email? </span>
						<a href="/">Resend</a>
					</p>
				</div>
			</div>
		</>
	);
};