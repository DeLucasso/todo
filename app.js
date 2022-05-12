//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
// const date = date();

const items = [];
const workItems = [];

  app.set('view engine', 'ejs');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static("public")); // This defines the public folder path!

// APP GET -------------------------  START
  app.get("/", function(req, res) {
  let day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});

});
// APP GET -------------------------  END


// APP POST -------------------------  START
app.post("/", function (req, res) {

  let item = req.body.newListItems;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

console.log("User input was " + item);
console.log("Now the array items contains: " + items);
});
// APP POST  ------------------------- END

// APP GET -------------------------  START
app.get("/work", function(req,res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});
// APP GET ------------------------- END

// APP POST -------------------------  START
app.post("/work", function(req,res) {
let item = req.body.newItem;
workItems.push(item);
res.redirect("/work");
});

  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  // APP POST  ------------------------- END

  app.get("/about", function(req, res) {
    res.render("about");
  });
