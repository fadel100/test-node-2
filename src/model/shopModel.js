import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    name: String,
    shopReviews: Number,
    shopTotalSales: Number,
    creationDate: Number,
    favoriteNumbers: Number,
    numberOfProduct: Number,
    shopURL: String,
    ownerID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "owner",
      required: true
    }
  },
  { timestamps: true }
);

export const Shop = mongoose.model("shop", shopSchema);
