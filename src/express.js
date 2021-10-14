const express = require("express");
const app = express();
const useragent = require("express-useragent");

app.use(useragent.express());

app.get("/", (req, res) => {
  const { ip, ips, method, url, originalUrl, path, protocol, secure, query } =
    req;
  console.log({
    ip,
    ips,
    method,
    url,
    originalUrl,
    path,
    protocol,
    secure,
    query,
  });
  console.log(req.get("cookie"));

  res.send(req.useragent);
});
app.listen("3000", "localhost");

//useragent sluzy do przekazania danych o przegladarce klienta
