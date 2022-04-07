import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
import { classToPlain } from "class-transformer";

interface ICategoryList{
    id: string;
}

class ListCategoryByIdService{
    async execute({id}: ICategoryList){

        const categoriesRepositories = getCustomRepository(CategoriesRepositories);

        if(id!){
            throw new Error("Inform the ID!");
        } 

        const category = await categoriesRepositories.findOne({id});

        if (category == null){
            throw new Error ("Category not found!");
        }

        return classToPlain(category);
    }
}

export { ListCategoryByIdService };