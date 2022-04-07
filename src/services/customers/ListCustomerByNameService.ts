import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepositories";
import { classToPlain } from "class-transformer";

interface ICustomerList{
    name: string;
}

class ListCustomerByNameService { 
    async execute({name} : ICustomerList) {
        const customerRepositories = getCustomRepository(CustomersRepositories);

        if (!name){
            throw new Error ("Inform the name!");
        }

        const customer = await customerRepositories.findOne({ name });

        if (customer == null){
            throw new Error ("Customer not found!");
        }
 
        return classToPlain(customer);
    }
}

export { ListCustomerByNameService };