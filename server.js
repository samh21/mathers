const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/products', require('./routes/api/products'));
app.use('/api/sendmail', require('./routes/api/sendmail'));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
