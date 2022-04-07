import { getCustomRepository } from "typeorm";
import { CustomersRepositories } from "../../repositories/CustomersRepositories";

interface ICustomerDelete{
    id: string;
}

class DeleteCustomerService{
    async execute({id}: ICustomerDelete){
        
        const customersRepositories = getCustomRepository(CustomersRepositories);

        const customerAlraedyExists = await customersRepositories.findOne({ id });

        if(!customerAlraedyExists){
            throw new Error ("Customer not found!");
        }
        
        return await customersRepositories.delete(id).then(f => {
            let messagmsgeDelete = {
                message: "Register deleted successfully!"
            }

            return messagmsgeDelete;

        }, err => {
            throw new Error("Failed to delete!");
        })
    }
}

export { DeleteCustomerService };