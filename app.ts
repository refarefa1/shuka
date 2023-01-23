import * as dotenv from "dotenv"
import express from "express"
import * as bodyParser from "body-parser"
import cors from 'cors'
import { fruitRouter } from "./routes/fruit.routes"

const app = express()
dotenv.config()

app.use(bodyParser.json())

const corsOptions = {
    origin: ['https://shuka-fruits.netlify.app', 'http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true
}
app.use(cors(corsOptions))

app.use("/api/fruit", fruitRouter)

app.get("/", function (req, res) {
    res.send("Hello Express");
});

app.listen(process.env.PORT, () => {
    console.log("Node server started running", process.env.PORT)
});