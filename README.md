# Coffee-Management-System

For node modules :

# npm install --save express mysql dotenv cors

# npm i --save-dev nodemon

After creating the js file for mysql database connection

# npm start 

maybe you got the error "Client does not support authentication protocol requested by server; consider upgrading MySQL client"
to fix this :
open mysql as root and run :

# ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

We need to install some new packages like the nodemailer and jsonwebtoken

# npm install --save jsonwebtoken nodemailer

Start npm in terminal, and then we need to generate a token for passwords :

# node

# require('crypto').randomBytes(64).toString('hex')

# Import the data from the csv files into 'category' and 'product' tables :

TRUNCATE TABLE table-name;

Because the MySQL server is configured with the --secure-file-priv option, and the allowed directory for file operations is set to /var/lib/mysql-files/
So we need to move CSV files to this directory.

mv /home/hamza/Documents/Angular-NodeJs-Project/product.csv /var/lib/mysql-files/

-> Import data :

LOAD DATA INFILE '/var/lib/mysql-files/product.csv'
INTO TABLE product
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

