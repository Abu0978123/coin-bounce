const mongoose = require("mongoose");
const { MONGODB_CONNECTION_STRING } = require("../config/index");

// DB_STRING is used for online clustor connection of DB
const DB_STRING = MONGODB_CONNECTION_STRING;

// compassLink is used for localhost connection of DB
const compassLink = 'mongodb://localhost:27017/coin-bounce';

const DB_Connection = async () => {
  try {
    const conn = await mongoose.connect(compassLink);
    console.log(`db connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`error : ${error}`);
  }
};

module.exports = DB_Connection;
