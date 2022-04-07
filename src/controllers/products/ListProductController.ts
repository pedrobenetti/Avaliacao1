import { Request, Response } from "express";
import { ListProductService } from "../../services/products/ListProductService"

class ListProductController {
    async handle(request: Request, response: Response){
        const listProductService = new ListProductService;
        
        const id = request.params.id
        const product = await listProductService.execute({ id })

        return response.json(product);
    }

}

export { ListProductController };