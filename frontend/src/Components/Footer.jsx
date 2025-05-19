import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';
import { FaXTwitter } from 'react-icons/fa6';

function Footer(){
    return <>
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <img alt="logo" src="/logo.png"/>
                    {/* <img alt="logo" src="https://cdn.prod.website-files.com/64e6eacd2c162c96bf6c6af9/64e6eacd2c162c96bf6c6b17_tgrs_logo_orange.svg"/> */}
                    <span>ChatBlink</span>
                </div>
                <div className={styles.text}>
                    <p>A random chat, a random connection.</p>
                    <p className={styles.copyright}>copyright &copy; 2025 @ Satish Singh</p>
                </div>
                <div className={styles.icons}>
                    <FaFacebook />
                    <FaGithub />
                    <FaInstagram />
                    <FaXTwitter />
                </div>
            </div>
            
            <div className={styles.bottom}>
                <ul className={styles.column}>
                    <li><b>Product</b></li>
                    <li>Overview</li>
                    <li>Chat</li>
                    <li>Support</li>
                    <li>Blog</li>
                </ul>
                <ul className={styles.column}>
                    <li><b>Resources</b></li>
                    <li>Documentation</li>
                    <li>Tutorial</li>
                    <li>Blog</li>
                    <li>Community</li>
                </ul>
                <ul className={styles.column}>
                    <li><b>Company</b></li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
                <ul className={styles.column}>
                    <li><b>Legal</b></li>
                    <li>Privacy Policy</li>
                    <li>Support</li>
                </ul>
            </div>
        </footer>
    </>
}

export default Footer;