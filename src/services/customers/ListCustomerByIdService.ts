import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepositories";
import { classToPlain } from "class-transformer";

interface ICustomerList{
    id: string;
}

class ListCustomerByIdService { 
    async execute({id} : ICustomerList) {
        const customerRepositories = getCustomRepository(CustomersRepositories);

        if (!id){
            throw new Error ("Inform the ID!");
        }

        const customer = await customerRepositories.findOne({ id });

        if (customer == null){
            throw new Error ("Customer not found!");
        }
 
        return classToPlain(customer);
    }
}

export { ListCustomerByIdService };