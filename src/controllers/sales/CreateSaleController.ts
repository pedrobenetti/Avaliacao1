import { Request, Response } from "express";
import { CreateSaleService } from "../../services/sales/CreateSaleService";

class CreateSaleController {
    async handle(request: Request, response: Response) {
        const { product_id, client_id, quantity, grossTotal, discount, amount } = request.body;

        const createSaleService = new CreateSaleService();

        const sale = await createSaleService.execute({
            product_id,
            client_id,
            quantity,
            grossTotal,
            discount,
            amount
        });

        return response.json(sale);
    }

}

export { CreateSaleController };
