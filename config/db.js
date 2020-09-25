const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    console.log('failed to connect to db');
    process.exit(1);
  }
};

module.exports = connectDB;
