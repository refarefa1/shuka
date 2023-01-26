"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const path_1 = __importDefault(require("path"));
const fruit_routes_1 = require("./api/fruit/fruit.routes");
const app = (0, express_1.default)();
dotenv.config();
app.use(bodyParser.json());
// const corsOptions = {
//     origin: ['https://shuka.onrender.com/', 'http://127.0.0.1:5173', 'http://localhost:5173'],
//     credentials: true
// }
// app.use(cors(corsOptions))
app.use(express_1.default.static(path_1.default.resolve(__dirname, 'public')));
app.use("/api/fruit", fruit_routes_1.router);
app.listen(process.env.PORT, () => {
    console.log("Node server started running", process.env.PORT);
});
