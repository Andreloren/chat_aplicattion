import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { createUserValidator, checkDuplicateCpfValidator } from "../validators";
import { UserLoggedController } from "../../userLogged/controller/userLogged.controller";

const usersRoutes = Router();

usersRoutes.post(
  "/",
  [createUserValidator, checkDuplicateCpfValidator],
  new UserController().create
);

usersRoutes.get("/", new UserController().listByCpf);

usersRoutes.post("/logged", new UserLoggedController().create);

export { usersRoutes };
