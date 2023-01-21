const expres = require("express");
const { connection } = require("./config/db");
const userRoute = require("./router/user.router");
const app = expres();
let port = process.env.PORT || 8311;
app.use(expres.json());

app.get("", (req, res) => {
  res.send("welcom");
});

app.use("", userRoute);

app.listen(port, async () => {
  try {
    await connection;
    console.log(`db connected successfully http://localhost:${port}/login`);
  } catch (err) {
    console.log(err, "db conenction failed");
  }
});
