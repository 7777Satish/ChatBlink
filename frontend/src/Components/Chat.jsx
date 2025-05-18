import styles from './Chat.module.css';

function Chat({messages, message, setMessage, sendMessage}){
    return <div className={styles.main}>
        <div className={styles.top}>
            {messages.map((m,i)=><div key={Math.floor(Math.random()*100000)} className={styles.message}>
                {(i==0 && <h5>{m[0]}</h5>) ||  messages[i-1][0]!=m[0] && <h5>{m[0]}</h5>}
                <p>{m[1]}</p>
            </div>)}
        </div>

        <form onSubmit={sendMessage}>
            <button className={styles.skip} type="button">Skip</button>
            <input onChange={(e)=>{setMessage(e.target.value)}} value={message} type='text' placeholder='Enter your message here: ' />
            <button className={styles.submit} type='submit'>Send</button>
        </form>
    </div>
}

export default Chat;