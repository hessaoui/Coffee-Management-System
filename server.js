require('dotenv').config();
const http = require('http');
const app = require('./index');
const express = require('express');

const server = http.createServer(app);
server.listen(process.env.PORT);

const path = require('path');

// ... Existing code ...

const cors = require('cors');
app.use(cors({
    origin: 'http://0.0.0.0:4200'
}));

app.use(express.static(path.join(__dirname, '../Coffee-Management-Front/dist/Frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Coffee-Management-Front/dist/Frontend/index.html'));
});