const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  budget: { type: Number },
  location: { type: String },
  propertyType: { type: String, enum: ['apartment', 'villa', 'plot', 'commercial'] },
  source: { type: String, default: 'manual' },
  score: { type: Number, default: 0 },
  label: { type: String, enum: ['hot', 'warm', 'cold'], default: 'cold' },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
