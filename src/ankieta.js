const express = require("express");

const app = express();

app.use(express.static("../publicOriginal"));

const votes = {
  yes: 0,
  no: 0,
};

app.get("/vote/yes", (req, res) => {
  votes.yes++;
  res.send("Dzieki za budujący głos");
});

app.get("/vote/no", (req, res) => {
  votes.no++;
  res.send("Dzieki za destrukcyjny głos");
});

app.get("/votes/check", (req, res) => {
  res.send(`Głosy na tak: ${votes.yes}, Głosy na nie: ${votes.no}`);
});

app.listen("3000");
