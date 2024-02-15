require('dotenv').config();
const http = require('http');
const app = require('./index');

const server = http.createServer(app);
server.listen(process.env.PORT);

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3006;

// app.use(express.static('./dist/Frontend'));
// app.listen(PORT, () => {
//     console.log('Angular hide running on port ${PORT}.');
// })