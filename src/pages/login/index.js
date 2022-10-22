import { useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Logo } from '@components/Logo.jsx';
import styles from '@styles/Login.module.css';
import { useAuth } from '@hooks/useAuth.js';

export default function Login() {
	const form = useRef(null);
	const auth = useAuth();
	const router = useRouter();

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}

		auth.signIn(data.username, data.password)
			.then(() => router.push('/'))
			.catch(() => auth.setError('Invalid email or password'));
	};

	return (
		<>
			<Head>
				<title>Login | Yard Sale</title>
			</Head>
			<div className={styles.Login}>
				<div className={styles.Login_container}>
					<Logo />
					<form action="/" className={styles.form} ref={form} onSubmit={handleSubmit}>
						<label htmlFor="email" className={styles.label}>Email address</label>
						<input type="text" id="email" name="email" placeholder="platzi@example.com" className={`${styles.input} ${styles.input_email}`} />
						<label htmlFor="password" className={styles.label}>Password</label>
						<input type="password" id="password" name="password" placeholder="*********" className={`${styles.input} ${styles.input_password}`} />
						<input type="submit" value="Log in" className={`${styles.primary_button} ${styles.login_button}`} onClick={handleSubmit} />
						{
							auth.error ? <span className={styles.message_error}>{auth.error}</span> : null
						}
						<Link href="/password_recovery">Forgot my password</Link>
					</form>
					<Link href="/sign_up">
						<button className={`${styles.secondary_button} ${styles.signup_button}`}>Sign up</button>
					</Link>
				</div>
			</div>
		</>
	);
};