var connection = require("../config/connection");
//why two dots in filepath? these are in the same folder

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function translateSql(obj) {
    var arr = [];
    for (var key in obj) { //is this using obj parameter?
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (table, callback) {
        var dbQuery = "SELECT * FROM " + table + ";";
        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },

    insertOne: function (table, cols, vals, callback) {
        var dbQuery =
            "INSERT INTO " + table + " (" + cols.toString() + ")" +
            //cols.toString is a helper function
            "VALUES (" + createQmarks(vals.length) + ")";
        //createQmarks(vals.length) is a helper function
        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },

    updateOne: function (table, objColVals, condition, callback) {
        var dbQuery =
            "UPDATE " + table + " SET " + translateSql(objColVals) +
            " WHERE " + condition;
        //translateSql is a helper function

        console.log(dbQuery);
        connection.query(dbQuery, objColVals, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },

    deleteOne: function (table, condition, callback) {
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });

    }
}
module.exports = orm;