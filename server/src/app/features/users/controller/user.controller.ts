import { Response, Request } from "express";
import { CreateUserUsecase, GetByCpf } from "../usecases";
import { UserRepository } from "../repository/users.repository";
import { HttpHelper } from "../../../shared/utils";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, cpf, username, password } = req.body;

      const useCase = new CreateUserUsecase(new UserRepository());

      const result = await useCase.execute({ name, cpf, username, password });

      return HttpHelper.sucess(res, result, "Usuário criado com sucesso", 201);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }

  async listByCpf(req: Request, res: Response) {
    try {
      const { cpf } = req.params;

      const useCase = new GetByCpf(new UserRepository());

      const result = await useCase.execute(cpf);

      if (!result) {
        return HttpHelper.badRequest(res, "Usuário não encontrado", 400);
      }

      return HttpHelper.sucess(res, result.toJson());
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }
}
