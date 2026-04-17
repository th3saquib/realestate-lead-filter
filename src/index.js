require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/api/leads', leadRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Real Estate Lead Filter API is running 🚀' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
