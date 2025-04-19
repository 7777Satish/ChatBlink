import Footer from './Components/Footer';
import Nav from './Components/Nav';
import styles from './Signup.module.css';

function Signup() {
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
            <div className={styles.signupForm}>
                <h1 className={styles.title}>Create Your Account</h1>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input type="text" id="username" name="username" className={styles.input} placeholder="Enter your username" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" name="email" className={styles.input} placeholder="Enter your email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" id="password" name="password" className={styles.input} placeholder="Enter your password" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className={styles.input} placeholder="Confirm your password" required />
                    </div>
                    <button type="submit" className={styles.submitButton}>Sign Up</button>
                </form>
                <p className={styles.loginLink}>
                    Already have an account? <a href="/login">Log in</a>
                </p>
            </div>
        </main>

        <Footer />
    </>
}

export default Signup;