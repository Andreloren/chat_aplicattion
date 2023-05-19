import { Express } from "express";
import { usersRoutes } from "../../app/features/users/routes/users.routes";
import { usersLoggedRoutes } from "../../app/features/userLogged/routes/userLogged.routes";

export const makeRoutes = (app: Express) => {
  app.use("/users", usersRoutes);
  app.use("/users/logged", usersLoggedRoutes);
};
