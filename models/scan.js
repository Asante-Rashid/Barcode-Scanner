const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scanSchema = new Schema({
  Name: { type: String, required: true },
  UPC: { type: Number, required: true },
  ASIN: { type: Number, required: true },
  Image: { type: String, required: true},
  Description: { type: String, required: true }
});

const Scan = mongoose.model("Scan", scanSchema);

module.exports = Scan;