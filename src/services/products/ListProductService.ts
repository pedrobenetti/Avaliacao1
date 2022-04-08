import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IProductList {
    id: string,
    name: string
}

class ListProductService {
    async execute({ id, name }: IProductList) {

        const productsRepositories = getCustomRepository(ProductsRepositories);

        if (!id && !name) {
            throw new Error("To consult a product, enter your id or name :)");
        }

        var product = null

        if (id && name) {
            product = await productsRepositories.find({ where: [{ id: id }, { name: name }] })
        }

        if (id && product == null) {
            product = await productsRepositories.find({ where: { id: id } })
        }

        if (name && product == null) {
            product = await productsRepositories.find({ where: { name: name } })
        }

        if (product != null && product[0] == null) {
            throw new Error("Product not found ;(");
        }

        return product;
    }
}

export { ListProductService };