const express = require("express");
const port = 8000;

const server = express();

server.get("/", (req, res) => {
  res.send({
    status: "200 ok",
  });
});

server.listen(port, () => {
  console.log("server is running on port " + port);
});
