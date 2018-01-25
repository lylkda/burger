var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, values, cb){
        var queryString = "INSERT INTO " + table + "(burger_name) VALUES(?)";
        connection.query(queryString, values, function(err, res){
            if (err){
                console.log(err);
                throw err;
            }
            cb(res);
        })
    },
    updateOne: function(table, condition, cb){
        var queryString = "UPDATE " + table + " SET devoured=1 WHERE " + condition;
        console.log(queryString);
        console.log(condition);
        connection.query(queryString, function(err, res){
            if (err){
                console.log(err);
                throw err;
            }
            cb(res);
        });
    }


}
module.exports = orm;