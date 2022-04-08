import { Request, Response } from "express";
import { ListCustomerByStateService } from "../../services/customers/ListCustomerByStateService";

class ListCustomerByStateController{
    async handle(request: Request, response: Response){
        const listCustomerByStateService = new ListCustomerByStateService;

        const state = request.params.id;
        const customer = await listCustomerByStateService.execute({ state });

        return response.json(customer);
    }
}

export { ListCustomerByStateController };