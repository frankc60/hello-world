const express = require("express");

const app = express();

const PORT = 3000;
const HOST = "0.0.0.0";

app.get('/', (req, res) => {

  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(`Hello World! ${HOST}:${PORT}.
  the end. changed Saturday 31st July-b. ${fullUrl}`);
})

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})




//end
