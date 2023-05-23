const mongoose = require("mongoose");
const { MONGODB_CONNECTION_STRING } = require("../config/index");
const DB_STRING = MONGODB_CONNECTION_STRING;

const DB_Connection = async () => {
  try {
    const conn = await mongoose.connect(DB_STRING);
    console.log(`db connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`error : ${error}`);
  }
};

module.exports = DB_Connection;
