import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { makeRoutes } from "./routes.config";

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp);

app.use(cors());
app.use(express.json());

makeRoutes(app);

export { serverHttp, io };
