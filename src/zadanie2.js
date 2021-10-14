const express = require("express");
const { readFile, writeFile } = require("fs").promises;
const app = express();

let name = "";

app.get("/name/set/:name", async (req, res) => {
  name = req.params.name;
  await writeFile("./names.txt", JSON.stringify(name), (err) => {
    if (err) return console.log(err);
    res.send(name);
  });
});

app.get("/name/show", (req, res) => {
  res.send(name);
});

app.get("/name/check", (req, res) => {
  if (name) {
    res.send("true");
  }
});

app.listen("3000", "localhost");
