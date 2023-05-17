import { Express } from "express";
import { usersRoutes } from "../../app/features/users/routes/users.routes";

export const makeRoutes = (app: Express) => {
  app.use("/users", usersRoutes);
};
