const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dummySchema = new Schema({
  dummyName: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Dummy", dummySchema);
