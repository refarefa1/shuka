import express from "express"
import { getFruits } from "./fruit.controller";
const router = express.Router()

router.get("/", getFruits);

export { router }

