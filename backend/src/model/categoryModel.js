import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    products: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product"
      }
    ]
  },
  { timestamps: true }
);

export const Category = mongoose.model("category", categorySchema);
