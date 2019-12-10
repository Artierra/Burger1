// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************


// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphdbs = ("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;

//should this below be bodyParser instead of express?
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine('handlebars', exphdbs({
    defaultLayout: "main"
}));
app.set("viewengine", "handlebars");



// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
var routes = require("./controllers/burger_controller.js");
app.use(routes);

// // Here we introduce HTML routing to serve different HTML files
// require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});