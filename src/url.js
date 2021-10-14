const { URLSearchParams } = require("url");

const qs = new URLSearchParams({
  name: "Paweł & Karina?",
});

console.log(`http://localhost:3000/?${qs.toString()}`);
