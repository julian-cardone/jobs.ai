const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ResumeSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  userId: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true,
    index: true
  },
  file: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Resume = mongoose.model('Resume', ResumeSchema);