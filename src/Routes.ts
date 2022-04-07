import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { ListUserController } from "./controllers/users/ListUserController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";
import { UpdateUserController } from "./controllers/users/UpdateUserController";
import { AuthenticateUserController } from "./controllers/users/AuthenticateUserController";

import { CreateProductController } from "./controllers/products/CreateProductController";
import { DeleteProductController } from "./controllers/products/DeleteProductController";
import { ListProductController } from "./controllers/products/ListProductController";
import { ListProductNameController } from "./controllers/products/ListProductNameController";

import { ensureAdmin } from "./middlewares/EnsureAdmin";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const authenticateUserController = new AuthenticateUserController();

const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const listProductController = new ListProductController();
const listProductNameController = new ListProductNameController();

const router = Router();

router.post("/products", ensureAuthenticated, createProductController.handle);
router.get("/products/list-by-id/:id",  listProductController.handle);
router.get("/products/list-by-name/:name",  listProductNameController.handle);
router.delete("/products/:id", ensureAuthenticated, ensureAdmin, deleteProductController.handle);

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.use(ensureAuthenticated);
router.put("/users", updateUserController.handle);

router.use(ensureAdmin);
router.delete("/users/:id", deleteUserController.handle);
router.get("/users", listUserController.handle);


export { router };