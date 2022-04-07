import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepositories";

interface ICustomerRequest{
    id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
    cpf: string;
    address: string;
    city: string;
    state: string;
    neighbourhood: string;
}

class CreateCustomerService{
    async execute({id, name, phone, email, password, cpf, address, city, state, neighbourhood}: ICustomerRequest){
        
        const CustomerRepository = getCustomRepository(CustomersRepositories);

        if(!name){
            throw new Error ("Name required!");
        }

        if(!password){
            throw new Error ("Password required!");
        }

        if(!cpf){
            throw new Error ("Cpf required!");
        }

        const customerAlreadyExists = await CustomerRepository.findOne({cpf});
        
        if(customerAlreadyExists){
            throw new Error ("Customer already exists!");
        }

        const customer = CustomerRepository.create({
            id,
            name,
            phone,
            email,
            password,
            cpf,
            address,
            city,
            state,
            neighbourhood
        });

        await CustomerRepository.save(customer);

        return customer;
    }
}

export { CreateCustomerService };