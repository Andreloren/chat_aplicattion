import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { createUserValidator, checkDuplicateCpfValidator } from "../validators";
import { UserLoggedController } from "../../userLogged/controller/userLogged.controller";
import { checkDuplicateCpfLoggedValidator } from "../../userLogged/validators/checkDuplicateCpfLogged.validator";

const usersRoutes = Router();

usersRoutes.post(
  "/",
  [createUserValidator, checkDuplicateCpfValidator],
  new UserController().create
);

usersRoutes.get("/", new UserController().listByCpf);

usersRoutes.post(
  "/logged",
  [checkDuplicateCpfLoggedValidator],
  new UserLoggedController().create
);

usersRoutes.get("/logged", new UserLoggedController().listByCpfLogged);

usersRoutes.get("/logged/all", new UserLoggedController().getAllLogged);

usersRoutes.delete("/logged/:userLoggedId");

export { usersRoutes };
