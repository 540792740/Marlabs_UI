var http = require('http');

//create a server object:
function startServer() {
    http.createServer(function (req, res) {
        console.log("Some body request");
        res.write('<h3>Hello World!</h3>'); //write a response to the client
        res.end(); //end the response
    }).listen(8080); //the server object listens on port 8080
    console.log("Server started");
}