import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    bestseller: Boolean,
    inCart: Number,
    totalSales: Number,
    salesWeek: Number,
    salesMonth: Number,
    url: String,
    shopId: Number,
    categoryId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "category",
      required: true
    }
  },
  { timestamps: true }
);

productSchema.index({ categoryId: 1, name: 1 }, { unique: true });

export const Product = mongoose.model("product", productSchema);
