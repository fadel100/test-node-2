import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import productRouter from "./router/productRouter";
import categoryRouter from "./router/categoryRouter";
import { connect } from "./db";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(3002, () => {
      console.log(`REST API on http://localhost:3002`);
    });
  } catch (e) {
    console.error(e);
  }
};
