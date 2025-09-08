const mongoose = require("mongoose");

const nProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NProduct", nProductSchema);
