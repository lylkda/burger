let express = require("express");
let methodOverride = require('method-override');
let bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

let app = express();

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});
