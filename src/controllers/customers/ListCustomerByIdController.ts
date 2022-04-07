import { Request, Response } from "express";
import { ListCustomerByIdService } from "../../services/customers/ListCustomerByIdService";

class ListCustomerByIdController{
    async handle(request: Request, response: Response){
        const listCustomerByIdService = new ListCustomerByIdService;

        const id = request.params.id;
        const customer = await listCustomerByIdService.execute({ id });

        return response.json(customer);
    }
}

export { ListCustomerByIdController };