import { FaArrowRight } from "react-icons/fa";
import styles from './Banner.module.css';
import { Link } from "react-router-dom";

function Banner(){
    return <section className={styles.banner}>
                <div className={styles.container}>
                    <h1>Start chatting now and experience fun, anonymous conversations!</h1>
                    <Link to="/chat"><button>Start Chatting <FaArrowRight /></button></Link>
                </div>
            </section>
}

export default Banner;