const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true,
    enum: ['Instagram', 'Facebook', 'Twitter', 'TikTok', 'LinkedIn']
  },
  dueDate: {
    type: Date,
    required: true
  },
  payment: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },

}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);