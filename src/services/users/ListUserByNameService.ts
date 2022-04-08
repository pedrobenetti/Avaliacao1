import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

interface IUserList{
    name: string;
}

class ListUserByNameService { 
    async execute({name} : IUserList) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        if (!name){
            throw new Error ("Inform the name!");
        }

        const user = await usersRepositories.findOne({ where : {name: name} });

        if (user == null){
            throw new Error ("User not found!");
        }

        return classToPlain(user);
    }
}

export { ListUserByNameService };