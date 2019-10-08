import { Router } from "express";
import {
  getOne,
  getMany,
  createOne,
  updateOne,
  removeOne
} from "../controllers/categoryController";

const router = Router();

// /api/category
router
  .route("/")
  .get(getMany)
  .post(createOne);

// /api/category/:id
router
  .route("/:id")
  .get(getOne)
  .put(updateOne)
  .delete(removeOne);

export default router;
