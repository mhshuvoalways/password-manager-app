const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      max: 20,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
