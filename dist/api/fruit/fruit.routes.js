"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const fruit_controller_1 = require("./fruit.controller");
const router = express_1.default.Router();
exports.router = router;
router.get("/", fruit_controller_1.getFruits);
router.get("/:id", fruit_controller_1.getById);
