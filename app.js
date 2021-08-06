const moment = require("moment");
const express = require("express");

const app = express();

const PORT = 3000;
const HOST = "0.0.0.0";

app.get('/', (req, res) => {

 let nowt = moment().format('MMMM Do YYYY, h:mm:ss a');


  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(`Hello World! ${HOST}:${PORT}.
  the end. changed Friday 6 Aug. now is: ${fullUrl}
  ${nowt}`);
})

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})




//end
