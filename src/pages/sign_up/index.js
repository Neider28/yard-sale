import Head from 'next/head';
import styles from '@styles/SignUp.module.css';

export default function CreateAccount() {
	return (
		<>
			<Head>
				<title>Sign Up | Yard Sale</title>
			</Head>
			<div className={styles.CreateAccount}>
				<div className={styles.CreateAccount_container}>
					<h1 className={styles.title}>My account</h1>
					<form action="/" className={styles.form}>
						<div>
							<label htmlFor="name" className={styles.label}>Name</label>
							<input type="text" id="name" placeholder="Teff" className={`${styles.input} ${styles.input_name}`} />
							<label htmlFor="email" className={styles.label}>Email</label>
							<input type="text" id="email" placeholder="platzi@example.com" className={`${styles.input} ${styles.input_email}`} />
							<label htmlFor="password" className={styles.label}>Password</label>
							<input type="password" id="password" placeholder="*********" className={`${styles.input} ${styles.input_password}`} />
						</div>
						<input type="submit" value="Create" className={`${styles.primary_button} ${styles.login_button}`} />
					</form>
				</div>
			</div>
		</>
	);
};