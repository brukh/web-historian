var http = require("http");
var handler = require("./request-handler");
var initialize = require("./initialize.js");

// Why do you think we have this here?
// HINT:It has to do with what's in .gitignore
<<<<<<< HEAD

// create archives directory
=======
>>>>>>> d281c5846fb583fa7b9b2caf9bf722acf3365d04
initialize();

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
