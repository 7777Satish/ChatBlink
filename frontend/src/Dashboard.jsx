const apiUrl = import.meta.env.VITE_API_URL;
const socketUrl = import.meta.env.VITE_SOCKET_URL;

import { createContext, useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import { FaGear } from 'react-icons/fa6';
import { FaEnvelope, FaUserFriends } from 'react-icons/fa';
import Details from './Components/Dashboard/Details';
import io from 'socket.io-client';
import Chat from './Components/Chat';

const socket = io(socketUrl);

function generateUsername() {
    const adjectives = [
        'Agile', 'Ancient', 'Angry', 'Arctic', 'Brave', 'Bright', 'Broken', 'Busy', 'Calm', 'Charming',
        'Cheerful', 'Clever', 'Cold', 'Cool', 'Crazy', 'Creative', 'Crispy', 'Curious', 'Dark', 'Dizzy',
        'Dreamy', 'Drifty', 'Dusty', 'Eager', 'Electric', 'Epic', 'Faint', 'Fancy', 'Fierce', 'Fluffy',
        'Flying', 'Free', 'Funky', 'Gentle', 'Glitchy', 'Golden', 'Grumpy', 'Happy', 'Hollow', 'Icy',
        'Invisible', 'Jumpy', 'Kind', 'Lazy', 'Loud', 'Lucky', 'Magic', 'Massive', 'Melty', 'Mini',
        'Modern', 'Mysterious', 'Neon', 'Nimble', 'Odd', 'Old', 'Pixel', 'Polite', 'Primal', 'Proud',
        'Quick', 'Quiet', 'Radiant', 'Rapid', 'Rare', 'Rebel', 'Retro', 'Rough', 'Royal', 'Rusty',
        'Savage', 'Shady', 'Sharp', 'Shiny', 'Silent', 'Simple', 'Sleepy', 'Smart', 'Sneaky', 'Soft',
        'Solar', 'Spicy', 'Speedy', 'Spooky', 'Static', 'Stealthy', 'Stormy', 'Strange', 'Strong',
        'Stubborn', 'Sweet', 'Tiny', 'Tough', 'Toxic', 'Tricky', 'Vast', 'Velvet', 'Wild', 'Witty', 'Zany'
    ];

    const nouns = [
        'Alien', 'Angel', 'Ant', 'Ape', 'Archer', 'Bandit', 'Bat', 'Bear', 'Beast', 'Bee', 'Blade',
        'Blaze', 'Bot', 'Buffalo', 'Bug', 'Cat', 'Centaur', 'Chameleon', 'Cheetah', 'Claw', 'Cobra',
        'Crab', 'Cricket', 'Crow', 'Cyclops', 'Dagger', 'Demon', 'Dino', 'Dolphin', 'Dragon', 'Druid',
        'Duck', 'Eagle', 'Elf', 'Falcon', 'Fang', 'Firefly', 'Fish', 'Flame', 'Fox', 'Frost', 'Ghost',
        'Ghoul', 'Giant', 'Goblin', 'Golem', 'Griffin', 'Hawk', 'Hedgehog', 'Hunter', 'Hyena', 'Jaguar',
        'Jellyfish', 'Knight', 'Kraken', 'Leopard', 'Lion', 'Lizard', 'Lynx', 'Mage', 'Mermaid', 'Mole',
        'Monkey', 'Moose', 'Moth', 'Ninja', 'Ogre', 'Otter', 'Owl', 'Panther', 'Pegasus', 'Penguin',
        'Phoenix', 'Pirate', 'Puma', 'Rabbit', 'Raccoon', 'Raptor', 'Rat', 'Reaper', 'Rhino', 'Robot',
        'Scorpion', 'Shadow', 'Shark', 'Slime', 'Snake', 'Sorcerer', 'Spider', 'Squirrel', 'Tiger',
        'Troll', 'Turtle', 'Vampire', 'Viper', 'Vixen', 'Walrus', 'Warlock', 'Whale', 'Witch', 'Wolf',
        'Wolverine', 'Wombat', 'Wraith', 'Yeti', 'Zombie'
    ];

    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // 4-digit number

    return `${randomAdj}${randomNoun}${randomNumber}`;
}


const userContext = createContext(null);

function Main() {

    const [user, setUser] = useState({ id: null, username: null });
    const [activeNavTab, setActiveNavTab] = useState(0);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        var id = localStorage.getItem('userId');
        var username = localStorage.getItem('username');
        if (!id) {
            id = Math.floor(Math.random() * 1000000);
            localStorage.setItem("userId", id);
        }

        if (!username) {
            username = generateUsername();
            localStorage.setItem("username", username);
        }

        setUser({ id: id, username: username });

        socket.on('receive', (data)=>{
            setMessages((prev)=>[...prev, data]);
        })

        return ()=>{socket.off('receive')}

    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('send', [user.username, message]);
        setMessage("");
    }

    if (!user.id || !user.username) return <>Loading...</>

    return (
        <userContext.Provider value={user}>
            <div className={styles.claim}>
                <p>You are using an anonymous account. <a href='/login'>Login</a> to claim account</p>
            </div>
            <main className={styles.main}>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <a href="/">
                            <img alt="logo" src="/logo.png" />
                            {/* <img alt="logo" src="https://cdn.prod.website-files.com/64e6eacd2c162c96bf6c6af9/64e6eacd2c162c96bf6c6b17_tgrs_logo_orange.svg" /> */}
                            <h1>ChatBlink</h1>
                        </a>
                    </div>

                    <div className={styles.center}>

                        <div className={styles.tabs}>
                            <button onClick={e => { setActiveNavTab(0) }} className={`${styles.tab} ${!activeNavTab ? styles.active : ""}`}>Chat</button>
                            <button onClick={e => { setActiveNavTab(1) }} className={`${styles.tab} ${activeNavTab ? styles.active : ""}`}>Friends</button>
                        </div>

                        <div className={styles.tabContentContainer}>
                            {(!activeNavTab ? <>
                                <div className={styles.tabContent}>
                                    <FaEnvelope/>
                                    <h2>No New Messages</h2>
                                </div>
                            </> : <>
                                <div className={styles.tabContent}>
                                    <FaUserFriends/>
                                    <h2>No Friends</h2>
                                </div>
                            </>)}
                        </div>

                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.account}>
                            <div className={styles.image}>
                                <img src='https://i.pinimg.com/736x/25/4c/00/254c008b8f42360229ead57db2f21224.jpg' />
                            </div>
                            <div className={styles.text}>
                                <h2>{user.username}</h2>
                                <span><span className={`${navigator.onLine ? styles.online : styles.offline}`}></span>{navigator.onLine ? "online" : "offline"}</span>
                            </div>
                            <div className={styles.settings}>
                                <FaGear />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.chat}>
                    {/* <div className={styles.details}>
                        <Details/>
                    </div> */}

                    <Chat messages={messages} message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </main>
        </userContext.Provider>
    );
}

export default Main;