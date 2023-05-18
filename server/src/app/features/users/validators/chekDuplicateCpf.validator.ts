import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/utils/http.helper";
import { GetByCpf } from "../usecases/getByCpf.usecase";
import { UserRepository } from "../repository/users.repository";

export const checkDuplicateCpfValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cpf } = req.body;

  const usecase = new GetByCpf(new UserRepository());

  const result = await usecase.execute(cpf);

  if (result) {
    return HttpHelper.badRequest(res, "CPF já cadastrado", 400);
  }

  next();
};
