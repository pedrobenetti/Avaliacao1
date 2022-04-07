import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface IUserRequest {
    product_id: string;
    client_id: string;
    quantity: number;
    grossTotal: number;
    discount: number;
    amount: number;
}

class CreateSaleService {
    async execute({ product_id, client_id, quantity, grossTotal, discount, amount }: IUserRequest) {

        const SaleRepository = getCustomRepository(SalesRepositories);

        if (!product_id) {
            throw new Error('Product id required!');
        }

        if (!client_id) {
            throw new Error('Client id required!');
        }

        if (!quantity) {
            throw new Error('Quantity required!');
        }

        if (!grossTotal) {
            throw new Error('Gross total required!');
        }

        if (!discount) {
            throw new Error('Discount required!');
        }

        if (!amount) {
            throw new Error('Amount required!');
        }

        const sale = SaleRepository.create({
          product_id,
          client_id,
          quantity,
          grossTotal,
          discount,
          amount
        });

        await SaleRepository.save(sale);

        return sale;
    }

}
export { CreateSaleService };