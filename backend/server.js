const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const cors = require("cors");
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // same here
  credentials: true
}));


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // no trailing slash or path
    methods: ["GET", "POST"],
    credentials: true,
  }
});


io.on("connection", (socket) => {
  console.log("🟢 New client connected:", socket.id);

  socket.on("send", (data) => {
    console.log("📩 Received message:", data);
    io.emit("receive", data); // broadcast to everyone
  });

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

server.listen(process.env.PORT || 4000, () => {
  console.log("✅ Socket.IO server running on port 4000");
});
