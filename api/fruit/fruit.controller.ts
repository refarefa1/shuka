import { Request, RequestHandler, Response } from "express"
import { Fruit } from "../../types/Fruit";
import { fruitService } from "./fruit.service"

export const getFruits: RequestHandler = async (req: Request, res: Response) => {
    fruitService.getFruits((fruits: Fruit[]) => {
        res.json(fruits);
    })
}

