import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepositories";
import { classToPlain } from "class-transformer";

interface ICustomerList{
    address: string;
}

class ListCustomerByAddressService { 
    async execute({address} : ICustomerList) {
        const customerRepositories = getCustomRepository(CustomersRepositories);

        if (!address){
            throw new Error ("Inform the address!");
        }

        const customer = await customerRepositories.findOne({ where : {address: address} });

        if (customer == null){
            throw new Error ("Customer not found!");
        }
 
        return classToPlain(customer);
    }
}

export { ListCustomerByAddressService };