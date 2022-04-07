import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
import { classToPlain } from "class-transformer";

interface ICategoryList{
    name: string;
}

class ListCategoryByNameService{
    async execute({name}: ICategoryList){

        const categoriesRepositories = getCustomRepository(CategoriesRepositories);

        if (!name){
            throw new Error("Inform the name!");
        }

        const category  = await categoriesRepositories.findOne({name});

        if (category == null){
            throw new Error ("Category not found");
        }

        return classToPlain(category);
    }
}

export { ListCategoryByNameService };