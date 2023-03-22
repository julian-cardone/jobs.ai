const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
