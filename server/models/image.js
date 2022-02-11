const mongoose = require("mongoose");

const image = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },


  date: {
    type: Date,
    default: Date.now(),
  },      
});

module.exports = mongoose.model("image", image);
