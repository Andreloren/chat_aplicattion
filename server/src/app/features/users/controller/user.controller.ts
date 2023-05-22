import { Response, Request } from "express";
import { CreateUserUsecase, GetByCpf } from "../usecases";
import { UserRepository } from "../repository/users.repository";
import { HttpHelper } from "../../../shared/utils";
import { GetAllUserUsecase } from "../usecases/getAllUsers.usecase";

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

  async getAll(req: Request, res: Response) {
    try {
      const useCase = new GetAllUserUsecase(new UserRepository());

      const result = await useCase.execute();

      if (result instanceof Error) {
        return res.status(400).json({ mensagem: result.message });
      }

      return HttpHelper.sucess(res, result);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }

  async listByCpf(req: Request, res: Response) {
    try {
      const { cpf } = req.body;

      const useCase = new GetByCpf(new UserRepository());

      const result = await useCase.execute(cpf);

      if (!result) {
        return HttpHelper.badRequest(res, "Usuário não encontrado", 400);
      }

      return HttpHelper.sucess(res, result);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }
}
