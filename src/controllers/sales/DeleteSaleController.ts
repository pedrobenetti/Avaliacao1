import { Request, Response } from "express";
import { DeleteSaleService } from "../../services/sales/DeleteSaleService";

class DeleteSaleController {
    async handle(request: Request, response: Response) {
        const deleteSaleService = new DeleteSaleService();
        const id = request.params.id;
        const sales = await deleteSaleService.execute({ id });

        return response.json(sales);

    }

}

export { DeleteSaleController };