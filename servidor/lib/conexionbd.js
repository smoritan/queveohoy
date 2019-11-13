var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'ositodeporcelana',
  database : 'proyecto9'
});

module.exports = connection;

