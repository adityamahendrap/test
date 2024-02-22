const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server!\n");
});

app.get("/hello", (req, res) => {
  res.send(`hello ${req.query.name}\n`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
