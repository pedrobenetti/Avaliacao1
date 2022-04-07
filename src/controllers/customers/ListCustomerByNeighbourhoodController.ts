import { Request, Response } from "express";
import { ListCustomerByNeighbourhoodService } from "../../services/customers/ListCustomerByNeighbourhoodService";

class ListCustomerByNeighbourhoodController{
    async handle(request: Request, response: Response){
        const listCustomerByNeighbourhoodService = new ListCustomerByNeighbourhoodService;

        const neighbourhood = request.params.neighbourhood;
        const customer = await listCustomerByNeighbourhoodService.execute({ neighbourhood });

        return response.json(customer);
    }
}

export { ListCustomerByNeighbourhoodController };