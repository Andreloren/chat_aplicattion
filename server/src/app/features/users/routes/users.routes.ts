import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { createUserValidator, checkDuplicateCpfValidator } from "../validators";

const usersRoutes = Router();

usersRoutes.post(
  "/",
  [createUserValidator, checkDuplicateCpfValidator],
  new UserController().create
);

usersRoutes.get("/all", new UserController().getAll);

usersRoutes.get("/", new UserController().listByCpf);

export { usersRoutes };
