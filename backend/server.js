const express = require('express')
const app = express()
const DB_Connection = require('./db/db_conn')
// const port = 3000
const {PORT} = require('./config/index')

//DB connection 
DB_Connection()
// this is the checking api
app.get('/', (req, res) => {
  res.send('Hello World!')
})    
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})  