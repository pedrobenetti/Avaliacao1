import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface ISaleListIdProduct {
    id: string
}

class ListSaleIdProductService {
    async execute({ id }: ISaleListIdProduct) {

        const saleRepository = getCustomRepository(SalesRepositories);

        if (!id) {
            throw new Error('Product id required!');
        }

        const sale = await saleRepository.find({ where: { product_id: id } });

        if (sale[0] == null) {
            throw new Error("Sales not found ;(");
        }

        return sale;
    }

}
export { ListSaleIdProductService };