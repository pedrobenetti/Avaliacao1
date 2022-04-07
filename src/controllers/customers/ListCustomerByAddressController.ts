import { Request, Response } from "express";
import { ListCustomerByAddressService } from "../../services/customers/ListCustomerByAddressService";

class ListCustomerByAddressController{
    async handle(request: Request, response: Response){
        const listCustomerByAddressService = new ListCustomerByAddressService;

        const address = request.params.address;
        const customer = await listCustomerByAddressService.execute({ address });

        return response.json(customer);
    }
}

export { ListCustomerByAddressController };