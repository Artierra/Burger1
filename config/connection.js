var mysql = require("mysql");
connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "rootroot",
    database: "burger_db",
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        console.error("there was an error connecting" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;