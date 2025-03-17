import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express(); // Create express App
const server = createServer(app); // Create http server
const io = new Server(server); // Create socket.io server

io.on("connection", () => {
  console.log("a user has conected");
});

app.use(logger("dev")); // Logs request console
const PORT = process.env.PORT || 3000; // Port

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
