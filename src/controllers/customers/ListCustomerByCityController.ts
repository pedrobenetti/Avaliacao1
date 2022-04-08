import { Request, Response } from "express";
import { ListCustomerByCityService } from "../../services/customers/ListCustomerByCityService";

class ListCustomerByCityController{
    async handle(request: Request, response: Response){
        const listCustomerByCityService = new ListCustomerByCityService;

        const city = request.params.id;
        const customer = await listCustomerByCityService.execute({ city });

        return response.json(customer);
    }
}

export { ListCustomerByCityController };