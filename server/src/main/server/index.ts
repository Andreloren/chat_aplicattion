import { serverHttp } from "../config/server.config";
import { appEnv } from "../../app/envs/app.env";

export const runServer = () => {
  serverHttp.listen(appEnv.port, () => {
    console.log(`Servidor rodando na porta ${appEnv.port}`);
  });
};
