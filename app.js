const express = require("express");

const app = express();

const PORT = 3000;
const HOST = "0.0.0.0";

app.get('/', (req, res) => {
  res.send(`Hello World! ${HOST}:${PORT}.
  the end.X2 -xxx19`);
})

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})

//end
