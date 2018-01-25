var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(values, cb){
        orm.insertOne("burgers", values, function(res){
            cb(res);
        })
    },
    updateOne: function(condition, cb){
        orm.updateOne("burgers", condition, function(res){
            cb(res);
        })
    }
}

module.exports = burger;