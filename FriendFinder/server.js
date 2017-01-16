// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
var app = express();
var PORT = 8080;

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTING
require(`./app/routing/html-routes`)(app);
require(`./app/routing/api-routes`)(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});