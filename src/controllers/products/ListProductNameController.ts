import { Request, Response } from "express";
import { ListProductNameService } from "../../services/products/ListProductNameService"

class ListProductNameController {
    async handle(request: Request, response: Response){
        const listProductService = new ListProductNameService;
        
        const name = request.params.name
        const product = await listProductService.execute({ name })

        return response.json(product);
    }

}

export { ListProductNameController };