var orm = require("../config/orm");
console.log("inthe models", orm)
var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (cols, vals, callback) {
        orm.selectAll("burgers", cols, vals, function (res) {
            callback(res);
        });
    },
    updateOne: function (objColVals, condition, callback) {
        orm.selectAll("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    },

    deleteOne: function (condition, callback) {
        orm.selectAll("burgers", condition, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;