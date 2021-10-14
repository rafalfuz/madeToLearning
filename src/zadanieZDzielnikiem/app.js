const express = require("express");

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.post("/check", (req, res) => {
  console.log(req.body);
  res.json({ ok: true });
});

app.listen("3000", "localhost");
