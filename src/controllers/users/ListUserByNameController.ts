import { Request, Response } from "express";
import { ListUserByNameService } from "../../services/users/ListUserByNameService"

class ListUserByNameController {
    async handle(request: Request, response: Response){
        const listUserByNameService = new ListUserByNameService;

        const name = request.params.name;
        const user = await listUserByNameService.execute({name});

        return response.json(user);
    }
}

export { ListUserByNameController };