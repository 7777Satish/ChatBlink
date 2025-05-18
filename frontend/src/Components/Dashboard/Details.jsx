import { FaFemale, FaMale } from 'react-icons/fa';
import styles from './Details.module.css';
import { useState } from 'react';

function Details(){
    const [gender, setGender] = useState(0);

    return <div className={styles.main}>
        <h1>Before you begin...</h1>
        <p>Select your gender so we can match you with the right person</p>
        <span>I am*</span>
        <div className={styles.buttons}>
            <button onClick={()=>{setGender(0)}} className={`${!gender?styles.active:""}`}>Male</button>
            <button onClick={()=>{setGender(1)}} className={`${gender?styles.active:""}`}>Female</button>
        </div>
        <p className={styles.terms}>I'm at least 18 years old and have read and agree to the <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a></p>

        <button className={styles.submit}>I Agree, Let's Go!</button>
    </div>
}

export default Details;