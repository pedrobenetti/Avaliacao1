import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

interface IUserList{
    id: string;
}

class ListUserByIdService { 
    async execute({id} : IUserList) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        if (!id){
            throw new Error ("Inform the ID!");
        }

        const user = await usersRepositories.findOne({ where : {id: id} });

        if (user == null){
            throw new Error ("User not found!");
        }

        return classToPlain(user);
    }
}

export { ListUserByIdService };