import mongoose from "mongoose";

export const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true
  });
};
