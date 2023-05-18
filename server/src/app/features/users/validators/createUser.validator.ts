import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/utils";

export const createUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, cpf, username, password } = req.body;

  if (!name) {
    return HttpHelper.badRequest(res, "Campo Nome é obrigatório.", 400);
  }

  if (!cpf) {
    return HttpHelper.badRequest(res, "Campo CPF é obrigatório.", 400);
  }

  if (!username) {
    return HttpHelper.badRequest(res, "Campo Username é obrigatório.", 400);
  }

  if (!password) {
    return HttpHelper.badRequest(res, "Campo Senha é obrigatório.", 400);
  }

  next();
};
