import styles from './About.module.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

function About(){
    return <>
    <div className="background">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
        <header className={styles.header}>

            {/* Nav Start */}
            <Nav />
            {/* Nav End */}

            <div className={styles.main}>
                <div className={styles.logo}>
                    <img alt="logo" src="https://cdn.prod.website-files.com/64e6eacd2c162c96bf6c6af9/64e6eacd2c162c96bf6c6b17_tgrs_logo_orange.svg"/>
                </div>
                <h1>Meet ChatBlink<b>.</b></h1>
                <div className={styles.paragraphs}>
                    <p>A fun, safe, and anonymous way to talk to strangers worldwide.</p>
                </div>
            </div>

        </header>

        <section className={styles.about}>
            <div className={styles.aboutBG}>
                <div className={styles.cover}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h1><span></span>About Us</h1>
                </div>
                <div className={styles.bottom}>
                    <h1>A Platform Built for Meaningful, Anonymous Conversations</h1>
                    <div className={styles.paragraphs}>
                        <p>At ChatBlink, we are more than just a chat platform—we are a space where people from all walks of life can connect, talk, and share thoughts without barriers. Our goal is to create a safe and seamless way for users to engage in spontaneous conversations without the need for personal details or lengthy sign-ups. Whether you’re looking for a casual chat, a deep discussion, or just someone to pass the time with, our platform makes it easy and instant.</p>
                        <p>We prioritize privacy, ensuring that every chat remains confidential and disappears once the conversation ends. Our real-time messaging system, powered by secure technology, guarantees smooth interactions, while AI moderation helps maintain a safe and respectful environment. No pressure, no strings attached—just genuine conversations whenever you want.</p>
                        <p>With a modern interface, dark mode support, and a focus on user experience, [App Name] is designed for simplicity and fun. There’s no waiting, no commitment—just click “Start Chatting” and meet someone new. Because sometimes, the best conversations happen with strangers.</p>
                    </div>
                </div>
            </div>
        </section>

        <Banner />
        
        <Footer />
    </>
}

export default About