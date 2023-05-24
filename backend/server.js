const express = require('express')
const app = express()
const router = require('./routes/index')
const DB_Connection = require('./db/db_conn')
const errorHandler = require('./middlewares/errorHandles')
const {PORT} = require('./config/index')

app.use(router);
DB_Connection();
app.use(errorHandler);


app.get('/', (req, res) => {
  res.send('Hello World!')
})    
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})  