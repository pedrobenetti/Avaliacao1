import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface ISaleListId {
    id: string
}

class ListSaleIdService {
    async execute({ id }: ISaleListId) {

        const saleRepository = getCustomRepository(SalesRepositories);

        if (!id) {
            throw new Error('Sale id required!');
        }

        const sale = await saleRepository.findOne({ where: { id: id } });

        if (sale == null) {
            throw new Error("Sale not found ;(");
        }

        return sale;
    }

}
export { ListSaleIdService };