import { getCustomRepository, Repository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface ISaleDelete{ 
    id: string
}

class DeleteSaleService{
    async execute({id}: ISaleDelete){

        const salesRepositories = getCustomRepository(SalesRepositories);

        const SaleAlreadyExists = await salesRepositories.findOne({
            id
        });

        if(!SaleAlreadyExists){
            throw new Error ("Sale not found!");
        }

        return await salesRepositories.delete(id).then(f => {
            let messageDelete = {
                message: "Sale deleted successfully :)"
            }

            return messageDelete;
            
        }, err=> {
            throw new Error ("Failed to delete sale ;(");
        });
        
    }
}

export { DeleteSaleService }