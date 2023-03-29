const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: { type: String, required: true, unique: true, null: false },
  hashedPassword: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
