const express = require("express");
const app = express();
app.get("/", (request, response) => {
  let date = new Date();
  let a = date.getDate();
  let b = date.getMonth() + 1;
  let c = date.getFullYear();
  response.send(`${a}-${b}-${c}`);
});
app.listen(3000);
module.exports = app;
