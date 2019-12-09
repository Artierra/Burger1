var connection = require("../config/connection");
//why two dots n filepath? these are in teh same folder

var orm = {
    selectAll: function (table, callback) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    }

    insertOne: function (table, cols, vals, callback) {
        var dbQuery =
            "INSERT INTO " + table + " (" + cols.toString() + ")" +
            "VALUES (" + createQmarks(vals.length) + ")";

        console.log(dbQuery);
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    }
    updateOne: function (table, objColVals, condition, callback) {
        var dbQuery =
            "UPDATE " +
            table +
            " SET " +
            translateSql(objColVals) +
            "WHERE " +
            condition;


        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    }
}