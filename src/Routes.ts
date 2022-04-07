import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { ListUserByNameController } from "./controllers/users/ListUserByNameController";
import { ListUserByIdController } from "./controllers/users/ListUserByIdController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";
import { AuthenticateUserController } from "./controllers/users/AuthenticateUserController";

import { CreateProductController } from "./controllers/products/CreateProductController";
import { DeleteProductController } from "./controllers/products/DeleteProductController";
import { ListProductController } from "./controllers/products/ListProductController";
import { ListProductNameController } from "./controllers/products/ListProductNameController";

import { CreateSaleController } from "./controllers/sales/CreateSaleController";
import { ListSaleIdController } from "./controllers/sales/ListSaleIdController";
import { ListSaleIdProductController } from "./controllers/sales/ListSaleIdProductController";
import { ListSaleIdClientController } from "./controllers/sales/ListSaleIdClientController";
import { DeleteSaleController } from "./controllers/sales/DeleteSaleController";

import { CreateCategoryController } from "./controllers/categories/CreateCategoryController";
import { ListCategoryByNameController } from "./controllers/categories/ListCategoryByNameController";
import { ListCategoryByIdController } from "./controllers/categories/ListCategoryByIdController";
import { DeleteCategoryController } from "./controllers/categories/DeleteCategoryController";


import { CreateCustomerController } from "./controllers/customers/CreateCustomerController";
import { ListCustomerByIdController } from "./controllers/customers/ListCustomerByIdController";
import { ListCustomerByNameController } from "./controllers/customers/ListCustomerByNameController";
import { ListCustomerByAddressController } from "./controllers/customers/ListCustomerByAddressController";
import { ListCustomerByCityController } from "./controllers/customers/ListCustomerByCityController";
import { ListCustomerByStateController } from "./controllers/customers/ListCustomerByStateController";
import { ListCustomerByNeighbourhoodController } from "./controllers/customers/ListCustomerByNeighbourhoodController";
import { DeleteCustomerController } from "./controllers/customers/DeleteCustomerController";


import { ensureAdmin } from "./middlewares/EnsureAdmin";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";

const createUserController = new CreateUserController();
const listUserByNameController = new ListUserByNameController();
const listUserByIdController = new ListUserByIdController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();


const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const listProductController = new ListProductController();
const listProductNameController = new ListProductNameController();


const createsaleController = new CreateSaleController();
const listSaleIdController = new ListSaleIdController();
const listSaleIdProductController = new ListSaleIdProductController();
const listSaleIdClientController = new ListSaleIdClientController();
const deleteSaleController = new DeleteSaleController();


const createCategoryController = new CreateCategoryController();
const listCategoryByNameController = new ListCategoryByNameController();
const listCategoryByIdController = new ListCategoryByIdController();
const deleteCategoryController = new DeleteCategoryController();


const createCustomerController = new CreateCustomerController();
const listCustomerByIdController = new ListCustomerByIdController();
const listCustomerByNameController = new ListCustomerByNameController();
const listCustomerByAddressController = new ListCustomerByAddressController();
const listCustomerByCityController = new ListCustomerByCityController();
const listCustomerByStateController = new ListCustomerByStateController();
const listCustomerByNeighbourhoodController= new ListCustomerByNeighbourhoodController();
const deleteCustomerController = new DeleteCustomerController();


const router = Router();

router.post("/products", ensureAuthenticated, createProductController.handle);
router.get("/products/list-by-id/:id", listProductController.handle);
router.get("/products/list-by-name/:name", listProductNameController.handle);
router.delete("/products/:id", ensureAuthenticated, ensureAdmin, deleteProductController.handle);

router.post("/sales", createsaleController.handle);
router.delete("/sales/:id", deleteSaleController.handle);
router.get("/sales/list-by-id/:id", listSaleIdController.handle);
router.get("/sales/list-by-product/:id", listSaleIdProductController.handle);
router.get("/sales/list-by-client/:id", listSaleIdClientController.handle);

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/categories", createCategoryController.handle);
router.post("/customers", createCustomerController.handle);


router.use(ensureAuthenticated);

router.use(ensureAdmin);
router.get("/users", listUserByNameController.handle);
router.get("/users", listUserByIdController.handle);
router.delete("/users/:id", deleteUserController.handle);

router.get("/categories", listCategoryByNameController.handle);
router.get("/categories", listCategoryByIdController.handle);
router.delete("/categories/:id", deleteCategoryController.handle);

router.get("/customer", listCustomerByNameController.handle);
router.get("/customer", listCustomerByIdController.handle);
router.get("/customer", listCustomerByAddressController.handle);
router.get("/customer", listCustomerByCityController.handle);
router.get("/customer", listCustomerByStateController.handle);
router.get("/customer", listCustomerByNeighbourhoodController.handle);
router.delete("/customer/:id", deleteCustomerController.handle);

export { router };