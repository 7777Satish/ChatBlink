// const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE
// });

// pool.query(`CREATE TABLE IF NOT EXISTS users (
//             id INT PRIMARY KEY AUTO_INCREMENT,
//             username VARCHAR(50) NOT NULL UNIQUE,
//             email VARCHAR(100) NOT NULL UNIQUE,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//         );
// `);

// module.exports = pool;


const {Pool} = require('pg');

const pool = new Pool({
    connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect().then(()=>{console.log("Connected!")}).catch((err)=>{console.log("Failed to connect", err)});

pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        gender varchar(10) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`);

module.exports = pool;