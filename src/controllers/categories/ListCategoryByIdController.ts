import { Request, Response } from "express";
import { ListCategoryByIdService } from "../../services/categories/ListCategoryByIdService";

class ListCategoryByIdController{
    async handle(request: Request, response: Response){
        const listCategoryByIdService = new ListCategoryByIdService;

        const id = request.params.id;
        const category = await listCategoryByIdService.execute({ id });

        return response.json(category);
    }

}

export { ListCategoryByIdController };