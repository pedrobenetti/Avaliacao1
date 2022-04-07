import { Request, Response } from "express";
import { ListSaleIdService } from "../../services/sales/ListSaleIdService"

class ListSaleIdController {
    async handle(request: Request, response: Response){
        const listSaleIdService = new ListSaleIdService;
        
        const id = request.params.id
        const sale = await listSaleIdService.execute({ id })

        return response.json(sale);
    }

}

export { ListSaleIdController };