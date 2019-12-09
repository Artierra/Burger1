var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("there was an error connecting" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;