const express = require("express");

const app = express();
const home = "/";
const article = "/article/:id/:titleOfArticle";

app.get(home, (req, res) => {
  res.send("Hello Home");
});

app.get(article, (req, res) => {
  console.log(req.params);
  res.send(
    `Hello article about ${req.params.titleOfArticle} number ${req.params.id}`
  );
});

app.listen("3000", "localhost");
