import { Request, Response } from "express";
import { ListSaleIdClientService } from "../../services/sales/ListSaleIdClientService"

class ListSaleIdClientController {
    async handle(request: Request, response: Response){
        const listSaleIdClientService = new ListSaleIdClientService;
        
        const id = request.params.id
        const sale = await listSaleIdClientService.execute({ id })

        return response.json(sale);
    }

}

export { ListSaleIdClientController };