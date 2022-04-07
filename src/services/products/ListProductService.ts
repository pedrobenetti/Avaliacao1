import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IProductList {
    id: string
}

class ListProductService {
    async execute({ id }: IProductList) {

        const productsRepositories = getCustomRepository(ProductsRepositories);

        if (!id) {
            throw new Error("Informe o id ;(");
        }

        const product = await productsRepositories.findOne({ id });
        
        if (product == null) {
            throw new Error("Product not found ;(");
        }

        return product;
    }
}

export { ListProductService };