const express = require("express");

const app = express();

app.get("/:valueOne/:valueTwo", (req, res) => {
  const { valueOne, valueTwo } = req.params;
  const parsedOne = parseInt(valueOne);
  const parsedTwo = parseInt(valueTwo);
  const sum = parsedOne + parsedTwo;
  res.send(sum + "");
});

app.listen("3000", "localhost");
