const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number
});

module.exports = mongoose.model("Module", ModuleSchema);
