//this authorization not authentication
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.KEY;

export function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("access denied , no token provided");

  try {
    const decode = jwt.verify(token, key);
    req.user = decode;
    next();
  } catch (ex) {
    res.status(400).send("invalid token");
  }
}
