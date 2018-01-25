console.log("Connection.js is loaded");
// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b66815ce637d56",
    password: "f1539b95",
    database: "heroku_29543ed04cd0575"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
