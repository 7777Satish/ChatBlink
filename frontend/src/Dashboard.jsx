import { createContext, useEffect, useState } from 'react';
import styles from './Dashboard.module.css';

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
    }, [])

    if (!user.id || !user.username) return <>Loading...</>

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f0f4f8',
            fontFamily: 'Arial, sans-serif',
        }}>
            <header style={{
                width: '100%',
                padding: '20px',
                backgroundColor: '#4a90e2',
                color: '#fff',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}>
                Welcome, {user.username}!
            </header>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                width: '80%',
                maxWidth: '1200px',
                margin: '20px auto',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
            }}>
                <aside style={{
                    width: '25%',
                    backgroundColor: '#f7f9fc',
                    padding: '20px',
                    borderRight: '1px solid #e6e9ed',
                }}>
                    <h3 style={{
                        fontSize: '18px',
                        marginBottom: '10px',
                        color: '#333',
                    }}>Active Users</h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        <li style={{
                            padding: '10px',
                            borderBottom: '1px solid #e6e9ed',
                            color: '#555',
                        }}>User1</li>
                        <li style={{
                            padding: '10px',
                            borderBottom: '1px solid #e6e9ed',
                            color: '#555',
                        }}>User2</li>
                        <li style={{
                            padding: '10px',
                            borderBottom: '1px solid #e6e9ed',
                            color: '#555',
                        }}>User3</li>
                    </ul>
                </aside>
                <main style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px',
                }}>
                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        marginBottom: '20px',
                        padding: '10px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '4px',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
                    }}>
                        <p style={{
                            margin: '10px 0',
                            padding: '10px',
                            backgroundColor: '#e6f7ff',
                            borderRadius: '4px',
                            alignSelf: 'flex-start',
                            maxWidth: '70%',
                        }}>Hello! How are you?</p>
                        <p style={{
                            margin: '10px 0',
                            padding: '10px',
                            backgroundColor: '#d9f7be',
                            borderRadius: '4px',
                            alignSelf: 'flex-end',
                            maxWidth: '70%',
                        }}>I'm good, thanks! How about you?</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            style={{
                                flex: 1,
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginRight: '10px',
                                fontSize: '16px',
                            }}
                        />
                        <button style={{
                            padding: '10px 20px',
                            backgroundColor: '#4a90e2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                        }}>Send</button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Main;