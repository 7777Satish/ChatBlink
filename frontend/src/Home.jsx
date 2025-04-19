import styles from './Home.module.css';
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";

function Home(){
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
                {/* <div className={styles.mainBG}></div> */}
                <h1>Talk to Strangers<b>.</b><br /><b>I</b>nstantly.</h1>
                <div className={styles.paragraphs}>
                    <p>Blink Chat is a real-time <b>anonymous</b> chat app where you can instantly connect with strangers worldwide</p>
                    <p>Meet new people, engage in <b>fun conversations</b>, and stay anonymous.</p>
                </div>
            </div>

        </header>

        <Banner />

        <Footer />
    </>
}

export default Home;