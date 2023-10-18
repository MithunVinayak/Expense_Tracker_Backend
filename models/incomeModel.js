const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 10,
    },
    type: {
      type: String,
      default:"income"
  },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 30,
      trim: true,
    },
  },
  { timestamps: true });

module.exports = mongoose.model("Income",incomeSchema);
