import { Router } from "express";
import { checkDuplicateCpfLoggedValidator } from "../validators/checkDuplicateCpfLogged.validator";
import { UserLoggedController } from "../controller/userLogged.controller";

const usersLoggedRoutes = Router();

usersLoggedRoutes.post(
  "/",
  [checkDuplicateCpfLoggedValidator],
  new UserLoggedController().create
);

usersLoggedRoutes.get("/", new UserLoggedController().listByCpfLogged);

usersLoggedRoutes.get("/all", new UserLoggedController().getAllLogged);

usersLoggedRoutes.delete("/:userLoggedId", new UserLoggedController().delete);

export { usersLoggedRoutes };
