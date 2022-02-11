const mongoose = require("mongoose");

const message = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },

  fromUserId: {
    type: String,
    required: true,
  },

  toUserId: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("message", message);
