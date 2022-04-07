import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface ISaleListIdClient {
    id: string
}

class ListSaleIdClientService {
    async execute({ id }: ISaleListIdClient) {

        const saleRepository = getCustomRepository(SalesRepositories);

        if (!id) {
            throw new Error('Client id required!');
        }

        const sale = await saleRepository.find({ where: { client_id: id } });

        if (sale[0] == null) {
            throw new Error("Sales not found ;(");
        }

        return sale;
    }

}
export { ListSaleIdClientService };