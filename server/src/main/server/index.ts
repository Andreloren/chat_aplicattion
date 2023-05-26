import { serverHttp } from "../config/server.config";
import { appEnv } from "../../app/envs/app.env";
// import { io } from "../config/server.config";

export const runServer = () => {
  serverHttp.listen(appEnv.port, () => {
    console.log(`Servidor rodando na porta ${appEnv.port}`);
  });
  // io.on("connection", (socket) => {
  //   console.log("Usuario Connectado", socket.id);
  // });
};
