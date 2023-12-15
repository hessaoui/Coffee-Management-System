# Coffee-Management-System

For node modules :

// npm install --save express mysql dotenv cors

// npm i --save-dev nodemon

After creating the js file for mysql database connection

// npm start 

maybe you got the error "Client does not support authentication protocol requested by server; consider upgrading MySQL client"
to fix this :
open mysql as root and run :

// ALTER USER 'hamza'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

We need to install some new packages like the nodemailer and jsonwebtoken

// npm install --save jsonwebtoken nodemailer

Start npm in terminal, and then we need to generate a token for passwords : 
// node
// require('crypto').randomBytes(64).toString('hex')