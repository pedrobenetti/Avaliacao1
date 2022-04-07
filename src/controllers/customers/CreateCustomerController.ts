import { Request, Response } from "express";
import { CreateCustomerService } from "../../services/customers/CreateCustomerService";

class CreateCustomerController{
    async handle(request: Request, response: Response){
        const{id, name, phone, email, password, cpf, address, city, state, neighbourhood} = request.body;

        const createCustomerService = new CreateCustomerService();
        
        const customer = await createCustomerService.execute({
            id,
            name, 
            phone,
            email,
            password,
            cpf, 
            address,
            state,
            city, 
            neighbourhood
        });

        return response.json(customer);
    }
}

export { CreateCustomerController };