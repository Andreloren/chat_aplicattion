import { NextFunction, Request, Response } from "express";
import { GetByCpfLogged } from "../usecases/getByCpfLogged.usecase";
import { UserLoggedRepository } from "../repository/userLogged.repository";
import { HttpHelper } from "../../../shared/utils";

export const checkDuplicateCpfLoggedValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cpf } = req.body;

  const usecase = new GetByCpfLogged(new UserLoggedRepository());

  const result = await usecase.execute(cpf);

  if (result) {
    return HttpHelper.badRequest(res, "Usuário já logado", 400);
  }

  next();
};
