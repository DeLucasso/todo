//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

  app.set('view engine', 'ejs');

  app.use(bodyParser.urlencoded({extended: true}));

  app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function (req, res) {
  item = req.body.newListItems;
  items.push(item);

  res.redirect("/");
console.log("User input was " + item);
console.log("Now the array items contains: " + items);
});


  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
