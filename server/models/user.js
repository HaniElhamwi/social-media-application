const mongoose = require("mongoose");

const user = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },  
 

  date: {
    type: Date,
    default: Date.now(),
  },

});

module.exports = mongoose.model("users", user);
