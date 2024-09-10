const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const passSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    category: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("password", passSchema);
