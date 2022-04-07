import { getCustomRepository  } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface ICategoryRequest{
    id: string;
    name: string;
    description: string;
}

class CreateCategoryService{
    async execute({id, name, description}: ICategoryRequest){

        const CategoryRepository = getCustomRepository(CategoriesRepositories);

        if (!name){
            throw new Error("Name required!");
        }

        const categoryAlraedyExists = await CategoryRepository.findOne({
            name,
        });

        if (categoryAlraedyExists){
            throw new Error ("Category already exists");
        }

        const category = CategoryRepository.create({
            id,
            name,
            description
        });

        await CategoryRepository.save(category);

        return category;
    }
}

export { CreateCategoryService };