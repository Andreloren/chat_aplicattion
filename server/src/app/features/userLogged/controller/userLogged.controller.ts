import { Response, Request } from "express";
import { HttpHelper } from "../../../shared/utils";
import { CreateUserLoggedUsecase } from "../usecases/createUserLogged.usecase";
import { UserLoggedRepository } from "../repository/userLogged.repository";
import { GetByCpfLogged } from "../usecases/getByCpfLogged.usecase";
import { GetAllUserLoggedUsecase } from "../usecases/getAllUsersLogged.usecase";
import { DeleteUserLoggedUsecase } from "../usecases/deleteUserLogged.usecase";

export class UserLoggedController {
  async create(req: Request, res: Response) {
    try {
      const { cpf } = req.body;

      const useCase = new CreateUserLoggedUsecase(new UserLoggedRepository());
      const result = await useCase.execute(cpf);

      if (result instanceof Error) {
        return res.status(400).json({ mensagem: result.message });
      }

      return HttpHelper.sucess(res, result, "Usuário logado com sucesso", 201);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }

  async getAllLogged(req: Request, res: Response) {
    try {
      const useCase = new GetAllUserLoggedUsecase(new UserLoggedRepository());

      const result = await useCase.execute();

      if (result instanceof Error) {
        return res.status(400).json({ mensagem: result.message });
      }

      return HttpHelper.sucess(res, result);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }

  async listByCpfLogged(req: Request, res: Response) {
    try {
      const { cpf } = req.body;

      const useCase = new GetByCpfLogged(new UserLoggedRepository());

      const result = await useCase.execute(cpf);

      if (!result) {
        return HttpHelper.badRequest(res, "Usuário não logado", 400);
      }

      return HttpHelper.sucess(res, result);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { userLoggedId } = req.params;

      const useCase = new DeleteUserLoggedUsecase(new UserLoggedRepository());

      const result = await useCase.execute(userLoggedId);

      if (result instanceof Error) {
        return res.status(400).json({ mensagem: result.message });
      }
      return HttpHelper.sucess(
        res,
        result,
        "Usuário deslogado com sucesso",
        200
      );
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }
}
