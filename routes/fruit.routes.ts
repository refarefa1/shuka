import express from "express"
import { getFruits } from "./fruit.controller";
const fruitRouter = express.Router()

fruitRouter.get("/", getFruits);

export { fruitRouter }

