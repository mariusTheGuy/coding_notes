// we 1st create an HTTP server
const server = require("http").createServer();
// then we attach 'socket.io' to the server, so we get
// a socket server for the front end
const io = require("socket.io")(server);

const PORT = 3000;

server.listen(PORT);
console.log("listening on port", PORT);

// this function comes from the 'event emitter' interface
// that our socket server uses to register an event listener
// this function listen for the 'connection' event
// and it will receive a 'socket' to communicate with the client
io.on("connection", (socket) => {
  console.log("a user connected!");
});
