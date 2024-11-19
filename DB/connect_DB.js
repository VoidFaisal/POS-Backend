// Import the mysql2 library
// const mysql = require('mysql2');
import mysql from 'mysql2';

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',            // Host where your MySQL server is running (usually 'localhost')
  user: 'root',                 // MySQL username (use the appropriate one for your MySQL setup)
  password: '',    // Your MySQL password
  database: 'pos'     // The name of the database you want to connect to
});

// Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database as ID ' + connection.threadId);
// });


// Close the connection
export default connection;
