import { io } from "../config/server.config";

io.on("connection", (socket) => {
  console.log("Usuario conectado", socket.id);

  socket.on("disconnect", (reason) => {
    console.log("Usuario desconectado", socket.id);
  });

  socket.on("set_username", (username) => {
    socket.data.username = username;
  });

  socket.on("message", (text) => {
    io.emit("receive_message", {
      text,
      authorId: socket.id,
      author: socket.data.username,
    });
  });
});
