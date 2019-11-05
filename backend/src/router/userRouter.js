// for sign up
import express from "express";
import { auth } from "../middleware/auth";
import { getUser, signUp } from "../controllers/userController";
const router = express.Router();

router.get("/me", [auth, getUser]);
router.post("/", signUp);

export default router;
