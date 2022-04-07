import { Request, Response } from "express";
import { DeleteCustomerService } from "../../services/customers/DeleteCustomerService";

class DeleteCustomerController{
    async handle(request: Request, response: Response){
        const deleteCustomerService = new DeleteCustomerService(); 
        const id = request.params.id;
        const customer = await deleteCustomerService.execute({ id });

        return response.json(customer);
    }

}

export { DeleteCustomerController };