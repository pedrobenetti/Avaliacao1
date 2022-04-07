import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { ListUserByNameController } from "./controllers/users/ListUserByNameController";
import { ListUserByIdController } from "./controllers/users/ListUserByIdController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";
import { AuthenticateUserController } from "./controllers/users/AuthenticateUserController";


import { CreateCategoryController } from "./controllers/categories/CreateCategoryController";
import { ListCategoryByNameController } from "./controllers/categories/ListCategoryByNameController";
import { ListCategoryByIdController } from "./controllers/categories/ListCategoryByIdController";
import { DeleteCategoryController } from "./controllers/categories/DeleteCategoryController";


import { CreateCustomerController } from "./controllers/customers/CreateCustomerController";
import { ListCustomerByIdController } from "./controllers/customers/ListCustomerByIdController";
import { ListCustomerByNameController } from "./controllers/customers/ListCustomerByNameController";
import { DeleteCustomerController } from "./controllers/customers/DeleteCustomerController";


import { ensureAdmin } from "./middlewares/EnsureAdmin";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";

const createUserController = new CreateUserController();
const listUserByNameController = new ListUserByNameController();
const listUserByIdController = new ListUserByIdController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();


const createCategoryController = new CreateCategoryController();
const listCategoryByNameController = new ListCategoryByNameController();
const listCategoryByIdController = new ListCategoryByIdController();
const deleteCategoryController = new DeleteCategoryController();


const createCustomerController = new CreateCustomerController();
const listCustomerByIdController = new ListCustomerByIdController();
const listCustomerByNameController = new ListCustomerByNameController();
const deleteCustomerController = new DeleteCustomerController();


const router = Router();

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
router.delete("/customer/:id", deleteCustomerController.handle);

export { router };