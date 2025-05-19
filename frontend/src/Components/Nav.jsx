import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import styles from './Nav.module.css';

function Nav(){
    return <nav className={styles.nav}>
    <div className={styles.left}>
        <div className={styles.logo}>
            <img alt="logo" src="/logo.png"/>
            <h1>ChatBlink</h1>
            {/* <img alt="logo" src="https://cdn.prod.website-files.com/64e6eacd2c162c96bf6c6af9/64e6eacd2c162c96bf6c6b17_tgrs_logo_orange.svg"/> */}
        </div>
        <ul>
            <li>
            <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.active : ""}
            >
            Home
            </NavLink>
            </li>
            
            <li>
            <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? styles.active : ""}
            >
            About
            </NavLink>
            </li>
            
            <li>
            <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? styles.active : ""}
            >
            Contact
            </NavLink>
            </li>
            
            <li>
            <NavLink 
            to="/support" 
            className={({ isActive }) => isActive ? styles.active : ""}
            >
            Support
            </NavLink>
            </li>
        </ul>
    </div>
    <div className={styles.right}>
        <div className={styles.icons}>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaXTwitter />
        </div>
        <div className={styles.buttons}>
            <Link to="/chat"><button>Start Chatting</button></Link>
        </div>
    </div>
</nav>
}

export default Nav;