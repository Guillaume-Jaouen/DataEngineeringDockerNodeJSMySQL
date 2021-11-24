const express = require('express')
const mysql = require('mysql2');
const PORT = 3000;
const HOST = '0.0.0.0';

const mysqlConfig = {
  host: "mysql_server",
  user: "guillaume",
  password: "PassWord",
  database: "test_db_mysql"
}

let con = null

const app = express()
app.get('/', function (req, res) {
  res.send('hello world')
})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);