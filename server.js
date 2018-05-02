var sequelize = require("sequelize")
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
var fridgRouter = require("./controllers/fridgeController");
var htmlRouter = require("./controllers/htmlRoutes");
var usdaRouter = require("./controllers/usdaController");
// can use / on both routes
app.use("/", usdaRouter);
app.use("/", htmlRouter);
app.use(fridgRouter, htmlRouter);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
