import { Request, Response } from "express";
import { ListSaleIdProductService } from "../../services/sales/ListSaleIdProductService"

class ListSaleIdProductController {
    async handle(request: Request, response: Response){
        const listSaleIdProductService = new ListSaleIdProductService;
        
        const id = request.params.id
        const sale = await listSaleIdProductService.execute({ id })

        return response.json(sale);
    }

}

export { ListSaleIdProductController };