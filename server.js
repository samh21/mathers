const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const helmet = require('helmet');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/products', require('./routes/api/products'));
app.use('/api/sendmail', require('./routes/api/sendmail'));

// Static assets for production
if (process.env.NODE_ENV === 'production') {
  // Set static
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
