const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://siteaccess:Casino123!@appconnections-cdw0b.mongodb.net/mathers?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
