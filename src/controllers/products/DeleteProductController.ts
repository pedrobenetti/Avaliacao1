import { Request, Response } from "express";
import { DeleteProductService } from "../../services/products/DeleteProductService";

class DeleteProductController{
    async handle(request: Request, response: Response){
        const deleteProductService = new DeleteProductService(); 
        const id = request.params.id;
        const users = await deleteProductService.execute({id});

        return response.json(users);

    }

}

export { DeleteProductController };