import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepositories";
import { classToPlain } from "class-transformer";

interface ICustomerList{
    state: string;
}

class ListCustomerByStateService { 
    async execute({state} : ICustomerList) {
        const customerRepositories = getCustomRepository(CustomersRepositories);

        if (!state){
            throw new Error ("Inform the state!");
        }

        const customer = await customerRepositories.findOne({ where : {state: state} });

        if (customer == null){
            throw new Error ("Customer not found!");
        }
 
        return classToPlain(customer);
    }
}

export { ListCustomerByStateService };