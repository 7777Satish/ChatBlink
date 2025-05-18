import Footer from './Components/Footer';
import Nav from './Components/Nav';
import styles from './Login.module.css';

function Login() {
    return <>
        <div className="background">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <Nav />

        <main className={styles.main}>
            <section className={styles.loginForm}>
                <h1 className={styles.title}>Welcome Back</h1>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input type="text" id="username" className={styles.input} placeholder="Enter your username" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" id="password" className={styles.input} placeholder="Enter your password" />
                    </div>
                    <button type="submit" className={styles.submitButton}>Login</button>
                    <p className={styles.forgotPassword}>
                        <a href="#" className={styles.link}>Forgot Password?</a>
                    </p>
                </form>
            </section>
        </main>

        <Footer />
    </>
}

export default Login;