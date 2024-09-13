const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const passSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    website: {
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
    note: {
      type: String,
    },
    itemPosition: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("password", passSchema);
