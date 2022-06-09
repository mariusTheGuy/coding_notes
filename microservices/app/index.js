const app = require("express")();

const appid = process.env.APPID;

app.get("/", (req, res) => {
  res.send(`${appid} Home Page`);
});
app.get("/app1", (req, res) => {
  res.send(`${appid} app1`);
});
app.get("/app2", (req, res) => {
  res.send(`${appid} app2`);
});
app.get("/admin", (req, res) => {
  res.send(`${appid} Admin page`);
});

app.listen(appid, () => {
  console.log(`Listening in port ${appid}`);
});
