// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb){
        var query = "SELECT * FROM ??";

        connection.query(query, [tableName], function(err, results){
            
            if (err) throw err;

            cb(results);
        });

    },

    insertOne: function(tableName, valueName, value, cb){
        var query = "INSERT INTO ?? (??) VALUE (?)";

        connection.query(query, [tableName, valueName, value], function(err, results){

            if (err) throw err;

            cb(results);
        })

    },

    updateOne: function(tableName, colOneName, colOneValue, colTwoName, colTwoValue, cb){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?"

        connection.query(query, [tableName, colOneName, colOneValue, colTwoName, colTwoValue], function(err, results){

            if (err) throw err;

            cb(results);
        })
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;