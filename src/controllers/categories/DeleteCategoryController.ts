import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/categories/DeleteCategoryService";

class DeleteCategoryController{
    async handle(request: Request, response: Response){
        const deleteCategoryService = new DeleteCategoryService();
        const id = request.params.id;
        const categories = await deleteCategoryService.execute({id});

        return response.json(categories);
    }
}

export { DeleteCategoryController };