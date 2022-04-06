import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {

        const UserRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error('Email required!');
        }

        if (!name) {
            throw new Error('Name required!');
        }

        if (!password) {
            throw new Error('Password required!');
        }

        const userAlreadyExists = await UserRepository.findOne({
            email,
        });

        if (userAlreadyExists) {
            throw new Error("User already exists!")
        }

        const passwordHash = await hash(password, 8);

        const user = UserRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        });

        await UserRepository.save(user);

        return user;
    }

}
export { CreateUserService };