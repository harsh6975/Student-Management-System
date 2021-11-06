const express = require("express");
const Router = require("./routes/indexRoute");
const layout = require("express-ejs-layouts");
const app = express();
const port = 3000;

//layout
app.use(layout);
//extract styles and script from sub pages to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//to encode data from form
app.use(express.urlencoded());

//connecting assets
app.use(express.static("./assets"));

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//connecting Routes
app.use("/", Router);

//Listing to server
app.listen(port, (err) => {
  if (err) {
    console.log("Error in loding express", err);
  }
  console.log("Connected, listening to port", port);
});
