// -- require
var http = require("http");

var manejador = function(request, response) {
  console.log("Request");
  response.end("Hello world");
}


var server = http.createServer(manejador);
server.listen(8080);
