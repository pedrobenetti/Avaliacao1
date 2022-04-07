import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IProductNameList {
    name: string
}

class ListProductNameService {
    async execute({ name }: IProductNameList) {

        const productsRepositories = getCustomRepository(ProductsRepositories);

        if (!name) {
            throw new Error("Please enter the product name :)");
        }

        const product = await productsRepositories.findOne({ name });

        if (product == null) {
            throw new Error("Product not found ;(");
        }

        return product;
    }
}

export { ListProductNameService };