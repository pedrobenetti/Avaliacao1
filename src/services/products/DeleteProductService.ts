import { getCustomRepository, Repository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IProductDelete{ 
    id: string
}

class DeleteProductService{
    async execute({id}: IProductDelete){

        const productsRepositories = getCustomRepository(ProductsRepositories);

        const productAlreadyExists = await productsRepositories.findOne({
            id
        });

        if(!productAlreadyExists){
            throw new Error ("Product not found!");
        }

        return await productsRepositories.delete(id).then(f => {
            let messageDelete = {
                message: "Product deleted successfully :)"
            }

            return messageDelete;
            
        }, err=> {
            throw new Error ("Failed to delete product ;(");
        });
        
    }
}

export { DeleteProductService }