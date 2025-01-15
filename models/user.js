const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlenght: 2,
    maxlenght: 30,
    required: true,
  },
  about: {
    type: String,
    minlenght: 2,
    maxlenght: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validator: {
      function(v) {
        return validator.isURL(v);
      },
      message: "Link invalido",
    },
  },
});
module.exports = mongoose.model("user", userSchema);
