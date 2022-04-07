import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface ICategoryDelete{
    id: string;
}

class DeleteCategoryService{
    async execute({id}: ICategoryDelete){
        
        const categoriesRepositories = getCustomRepository(CategoriesRepositories);

        const categoryAlraedyExists = await categoriesRepositories.findOne({
            id
        });

        if(!categoryAlraedyExists){
            throw new Error ("Category not found!");
        }
        
        return await categoriesRepositories.delete(id).then(f => {
            let messagmsgeDelete = {
                message: "Register deleted successfully!"
            }

            return messagmsgeDelete;

        }, err => {
            throw new Error("Failed to delete!");
        })
    }
}

export { DeleteCategoryService };