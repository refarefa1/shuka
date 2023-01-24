import express from "express"
import { getFruits, getById } from "./fruit.controller";
const router = express.Router()

router.get("/", getFruits);
router.get("/:id", getById);

export { router }

