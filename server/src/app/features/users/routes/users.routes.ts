import { Router } from "express";
import { UserController } from "../controller/user.controller";

const usersRoutes = Router();

usersRoutes.post("/", new UserController().create);

export { usersRoutes };
