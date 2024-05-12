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
    username: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("password", passSchema);
