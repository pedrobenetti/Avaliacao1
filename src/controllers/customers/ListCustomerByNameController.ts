import { Request, Response } from "express";
import { ListCustomerByNameService } from "../../services/customers/ListCustomerByNameService";

class ListCustomerByNameController{
    async handle(request: Request, response: Response){
        const listCustomerByNameService = new ListCustomerByNameService;

        const name = request.params.id;
        const customer = await listCustomerByNameService.execute({ name });

        return response.json(customer);
    }
}

export { ListCustomerByNameController };