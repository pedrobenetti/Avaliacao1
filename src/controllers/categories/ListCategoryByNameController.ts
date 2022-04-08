import { Request, Response } from "express";
import { ListCategoryByNameService } from "../../services/categories/ListCategoryByNameService";

class ListCategoryByNameController{
    async handle(request: Request, response: Response){
        const listCategoryByNameService = new ListCategoryByNameService;

        const name = request.params.id;
        const categories = await listCategoryByNameService.execute({ name });

        return response.json(categories);
    }

}

export { ListCategoryByNameController };