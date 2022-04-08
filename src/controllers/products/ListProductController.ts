import { Request, Response } from "express";
import { ListProductService } from "../../services/products/ListProductService"

class ListProductController {
    async handle(request: Request, response: Response) {
        const listProductService = new ListProductService;

        const id = request.query.id as string
        const name = request.query.name as string
        const product = await listProductService.execute({ id, name })

        return response.json(product);
    }

}

export { ListProductController };