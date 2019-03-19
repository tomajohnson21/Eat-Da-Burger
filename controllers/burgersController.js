var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
    burger.selectAll(function(data) {
        var hbsObject = {
        burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/api/burgers", function(req, res) {
 
    burger.selectAll(function(result) {
    // Send back the ID of the new quote
    res.json(result);
  });
});

router.post("/api/new", function(req, res) {
  
    var burger_name = req.body.burger_name;

    console.log(burger_name);
    
    burger.insertOne(burger_name, function(result){

        res.json({id: result.insertId});
    })

  
});

router.put("/api/update/:id", function(req, res) {

    var id = req.params.id;

    burger.updateOne(id, function(result) {

        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    })
})

// Export routes for server.js to use.
module.exports = router;