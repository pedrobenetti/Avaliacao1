import { Request, Response } from "express";
import { ListUserByIdService } from "../../services/users/ListUserByIdService";

class ListUserByIdController{
    async handle(request: Request, response: Response){
        const listUserByIdService = new ListUserByIdService;

        const id = request.params.id;
        const user = await listUserByIdService.execute({id});

        return response.json(user);
    }
}

export { ListUserByIdController };