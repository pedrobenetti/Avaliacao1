import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepositories";
import { classToPlain } from "class-transformer";

interface ICustomerList{
    neighbourhood: string;
}

class ListCustomerByNeighbourhoodService { 
    async execute({neighbourhood} : ICustomerList) {
        const customerRepositories = getCustomRepository(CustomersRepositories);

        if (!neighbourhood){
            throw new Error ("Inform the neighbourhood!");
        }

        const customer = await customerRepositories.findOne({ neighbourhood });

        if (customer == null){
            throw new Error ("Customer not found!");
        }
 
        return classToPlain(customer);
    }
}

export { ListCustomerByNeighbourhoodService };