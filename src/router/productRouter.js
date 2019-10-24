import { Router } from "express";
import {
  getMany,
  createOne,
  getOne,
  updateOne,
  removeOne
} from "../controllers/productController";
import { auth } from "../middleware/auth";

const router = Router();

router.use(auth);

// /api/product
router
  .route("/")
  .get(getMany)
  .post(createOne);

// /api/product/:id
router
  .route("/:id")
  .get(getOne)
  .put(updateOne)
  .delete(removeOne);

export default router;
