const mongoose = require("mongoose");

const { Schema } = mongoose;

const refreshToken = Schema(
  {
    token: { type: String, required: true },
    userID: { type: mongoose.Schema.objectId, ref: "users" },
  },

  { timestamps: true }
);

module.exports = mongoose.model("RefreshToken", refreshToken, "Tokens");
