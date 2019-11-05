import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    name: String,
    profileURL: String
  },
  { timestamps: true }
);

export const Owner = mongoose.model("owner", ownerSchema);
