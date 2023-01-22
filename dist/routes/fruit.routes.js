"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitRouter = void 0;
const express_1 = __importDefault(require("express"));
const fruit_controller_1 = require("./fruit.controller");
const fruitRouter = express_1.default.Router();
exports.fruitRouter = fruitRouter;
fruitRouter.get("/", fruit_controller_1.getFruits);
