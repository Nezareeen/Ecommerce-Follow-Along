const mongoose = require("mongoose");

const schema = new mongoose.Schema({ // Corrected: mongoose.Schema (capital S)
  name: { type: String, required: true }, // Corrected: String (capital S)
  email: { type: String, required: true }, // Corrected: String (capital S)
  password: { type: String, required: true }, // Corrected: String (capital S)
  image: { type: String } // Corrected: String (capital S)
});

const usermodel = mongoose.model("users", schema);

module.exports = { usermodel }; // Corrected: Object syntax