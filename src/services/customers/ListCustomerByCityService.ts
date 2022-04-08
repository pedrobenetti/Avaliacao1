import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepositories";
import { classToPlain } from "class-transformer";

interface ICustomerList{
    city: string;
}

class ListCustomerByCityService { 
    async execute({city} : ICustomerList) {
        const customerRepositories = getCustomRepository(CustomersRepositories);

        if (!city){
            throw new Error ("Inform the city!");
        }

        const customer = await customerRepositories.findOne({ where: {city: city} });

        if (customer == null){
            throw new Error ("Customer not found!");
        }
 
        return classToPlain(customer);
    }
}

export { ListCustomerByCityService };