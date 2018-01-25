var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body.burger_name);
    burger.insertOne([
            req.body.burger_name
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(condition, function (result) {
        console.log(result);
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            res.status(404).end();
        } else {
            res.status(200).end();
        
        }
    });
});


module.exports = router;