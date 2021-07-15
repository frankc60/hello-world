const ip = require("ip");
const express = require("express");

const app = express();

const port = 3000;

const ipAddress = ip.address();

app.get('/', (req, res) => {
  res.send(`Hello World! ${ipAddress}:${port}.
  the end.
  `)
})

app.listen(port, () => {
  console.log(`App listening on http://${ipAddress}:${port}`)
})
