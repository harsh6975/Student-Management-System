const express = require("express");

const app = express();
const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log("Error in loding express", err);
  }
  console.log("Connected, listning to port ", port);
});
