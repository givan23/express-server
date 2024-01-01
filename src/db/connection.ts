import mysql from 'mysql2'
import DB from './defines'

// create a new MySQL connection
const connection = mysql.createConnection({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PSW,
  database: DB.NAME
})
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error)
  } else {
    console.log('Connected to MySQL database!')
  }
})
// close the MySQL connection
connection.end()
