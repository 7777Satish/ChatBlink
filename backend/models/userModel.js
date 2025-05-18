const db = require('../config/db.js');
const bcrypt = require('bcryptjs');

const User = {
    createUser: async (username, email, password)=>{
        if(!username || !email || !password || typeof(username)!='string' || typeof(email)!='string' || typeof(password)!='string'){
            return -1;
        }
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            db.query(`
                INSERT INTO USERS (username, email, password)
                VALUES ($1, $2, $3) 
                RETURNING *;
            `, [username, email, hashedPassword]);
        } catch(err){
            console.log(err);
        }
    },
    getUserByEmail: async (email)=>{
        if(!email || typeof(email) != 'string') return 0;
        try{
            const query = `SELECT * FROM USERS WHERE email = $1`;
            const res = await db.query(query, [email])
            return res.rows[0];
        }  catch(err) {
            console.log(err);
        }
    }
}

module.exports = User;