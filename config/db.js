const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  const db = config.get('mongoURI') || process.env.MONGO_URI;
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
