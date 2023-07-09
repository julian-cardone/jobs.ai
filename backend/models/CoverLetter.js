const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for the document
//   fileURL: { type: String, required: true },
// for aws bucket integration

const coverLetterSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // foreign key for user document belongs to
  title: { type: String, required: true },
  name: {type: String, required: true},
  file: {type: Array, required: true}
});

// Define the collection and schema in the database
const CoverLetter = mongoose.model("CoverLetter", coverLetterSchema);

module.exports = CoverLetter;
