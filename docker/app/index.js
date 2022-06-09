const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello from a lightweight container");
});

app.listen(3000, () => {
  console.log("Server is listening in port 3000");
});
