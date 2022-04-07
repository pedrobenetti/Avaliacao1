import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IUserRequest {
    name: string;
    description: string;
    price: number;
    category_id: number;
}

class CreateProductService {
    async execute({ name, description, price, category_id }: IUserRequest) {

        const ProductRepository = getCustomRepository(ProductsRepositories);

        if (!name) {
            throw new Error('Name required!');
        }

        if (!description) {
            throw new Error('Description required!');
        }

        if (!price) {
            throw new Error('Price required!');
        }

        if (!category_id) {
            throw new Error('Category_id required!');
        }

        const productAlreadyExists = await ProductRepository.findOne({
            name
        });

        if (productAlreadyExists) {
            throw new Error("Product already exists!")
        }

        const product = ProductRepository.create({
          name,
          description,
          price,
          category_id
        });

        await ProductRepository.save(product);

        return product;
    }

}
export { CreateProductService };