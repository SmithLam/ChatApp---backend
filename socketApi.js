var socket_io = require("socket.io");
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on("connection", function (socket) {
  console.log("A user connected");
  io.sockets.emit("hello", { message: "Hello World!" });
  socket.on("send", (message) => {
    console.log("someone sent me", message);
    io.emit("receive", message);
  });
  socket.on("vote", (option) => {
    console.log("Check my option", option);
    io.emit("receiveVote", option);
  });
});

module.exports = socketApi;
