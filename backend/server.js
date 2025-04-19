require('dotenv').config();

const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT,(err)=>{
    console.log('Server listening on PORT', process.env.PORT);
});