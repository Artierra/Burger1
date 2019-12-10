var connection = require("../config/connection");
//why two dots n filepath? these are in teh same folder

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function translateSql(obj) {
    var arr = [];
    var value = obj[key];
    if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" "))
            value = "'" + value + "'";
    }
    arr.push(key + "=" + value)
}
return arr.toString();

var orm = {
    selectAll: function (table, callback) {
        var dbQuery = "SELECT * FROM " + table + ";";

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
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },

    updateOne: function (table, objColVals, condition, callback) {
        var dbQuery =
            "UPDATE " +
            table +
            " SET " +
            translateSql(objColVals) +
            //translateSql is a helper function
            "WHERE " +
            condition;


        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },

    deleteOne: function (table, condition, callback) {
        var dbQuery = "DELETE FROM " + table + "WHERE" + condition;
        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });

    }
}