import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import productRouter from "./router/productRouter";
import categoryRouter from "./router/categoryRouter";
import userRouter from "./router/userRouter";
import authRouter from "./router/authRouter";
import { connect } from "./db";
// import config from "config";
// if (!config.get("jwtPrivateKey")) {
//   console.error("fatal crash no jwtPrivateKey setup");
//   process.exit(1);
// }
export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

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
