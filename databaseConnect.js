var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Gofls0519!',
  database : 'fintech210222'
});
 
connection.connect();
 
connection.query('SELECT * FROM fintech210222.user;', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();