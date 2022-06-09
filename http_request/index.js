const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(1);
});

server.listen(3000);
console.log("listening...");
