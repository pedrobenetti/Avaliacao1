import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/categories/CreateCategoryService";

class CreateCategoryController{
    async handle(request: Request, response: Response){
        const{id, name, description} = request.body;

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({
            id, 
            name, 
            description
        });

        return response.json(category);
    }
    
}

export { CreateCategoryController };