import { Link } from 'react-router-dom';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import styles from './Contact.module.css';
import axios from 'axios';

function Contact() {

    async function handleForm(event) {
        event.preventDefault();

        var contactForm = document.getElementById('contactForm');

        var formData = new FormData(contactForm);
        var data = {}

        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            var res = await axios.post('http://localhost:8000/contact', data);
        } catch (error) {
            console.error('Error with the request:', error);
        }
    }

    return <>
        <div className="background">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <Nav />

        <header className={styles.header}>
            <div className={styles.left}>
                <h1 className={styles.heading}><span></span> Contact Us</h1>
                <h2>Get in Touch – We're Here to Help!</h2>
                <p>We’d love to hear from you! Whether you have a question, a suggestion, or need support, our team is here to help. Feel free to reach out, and we’ll get back to you as soon as possible.</p>
                <div className={styles.profile}>
                    <div className={styles.image}>
                        <img alt='Satish Singh' src='vite.svg' />
                    </div>
                    <div className={styles.text}>
                        <h1>Satish Singh</h1>
                        <span>Founder & CEO</span>
                    </div>
                </div>
                <div className={styles.details}>
                    <p>Email: <a href="mailto:contact@chatblink.com">contact@chatblink.com</a></p>
                    <p>Website: <Link href="/">chatblink.com</Link></p>
                </div>
            </div>

            <div className={styles.right}>
                <form onSubmit={handleForm} id='contactForm'>
                    <div className={styles.one}>
                        <label for="firstname">First Name</label>
                        <input type='text' id='firstname' name='firstname' placeholder='First Name' />
                    </div>
                    <div className={styles.one}>
                        <label for="lastname">Last Name</label>
                        <input type='text' id='lastname' name='lastname' placeholder='Last Name' />
                    </div>
                    <div className={styles.one}>
                        <label for="email">E-mail</label>
                        <input type='email' id='email' name='email' placeholder='E-mail' />
                    </div>
                    <div className={styles.one}>
                        <label for="phone">Phone</label>
                        <input type='number' id='phone' name='phone' placeholder='Phone' />
                    </div>
                    <div className={`${styles.one} ${styles.textarea}`}>
                        <label for="name">Message</label>
                        <textarea name='message' id='message' placeholder='Enter your message here...' />
                    </div>
                    <div className={styles.two}>
                        <input type='checkbox' name='terms' id='terms' />
                        <label for="terms">I have read the Privacy Policy and Terms and Conditions and accept their contents.</label>
                    </div>
                    <div className={styles.one}>
                        <button>Send a Message</button>
                    </div>
                </form>
            </div>
        </header>

        <Banner />

        <Footer />
    </>
}

export default Contact;