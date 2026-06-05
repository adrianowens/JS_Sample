const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'app_user',
  password: 'password',
  database: 'myapp'
});

function getUserByEmail(email) {
  // VULNERABLE: String concatenation
  const query = `SELECT * FROM users WHERE email = '\${email}'`;

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
