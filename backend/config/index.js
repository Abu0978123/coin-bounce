const dotenv = require("dotenv").config();

const PORT = process.env.port;
const MONGODB_CONNECTION_STRING = process.env.DB_CONNEC;

module.exports = {
  PORT,
  MONGODB_CONNECTION_STRING,
};
