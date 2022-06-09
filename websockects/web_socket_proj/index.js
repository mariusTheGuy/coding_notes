// SERVER SIDE
const http = require("http");

const WebsocketServer = require("websocket").server;

let connection = null;
let pp = "hello";

const httpServer = http.createServer((req, res) => {
  console.log("Request received!");
});

// "http": native server
// we inject this server into this class, "WebsocketServer" to make the handshake
// the handshake part and the message
const websocket = new WebsocketServer({
  httpServer: httpServer,
});
// then we have access to all these events
websocket.on("request", (request) => {
  // accept a websocket request from the client
  // 'null' if the want to accept all kind of protocols (chat, gaming...)
  connection = request.accept(null, request.origin);
  connection.on("open", (e) => {
    console.log("Connection opened!");
  });
  connection.on("close", (e) => {
    console.log("Connection closed!");
  });
  connection.on("message", (message) => {
    console.dir(`Received message from client: ${message.utf8Data}`);
  });

  sendEvery5Seconds();
});

httpServer.listen(8080, () => {
  console.log("listening on port 3000");
});

function sendEvery5Seconds() {
  connection.send(`Lucky number: ${Math.ceil(Math.random() * 10)}`);
  setTimeout(sendEvery5Seconds, 5000);
}
