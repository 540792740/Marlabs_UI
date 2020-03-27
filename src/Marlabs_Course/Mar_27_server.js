var http = require('http');
var url = require('url');
//create a server object:
function startServer(route,handle) {
    http.createServer(function (req, res) {
        var commentsData = "";
        var pathname = url.parse(req.url).pathname;
        console.log("Some body request" + pathname);
        req.setEncoding("utf8")
        req.addListener("data",function (chunk) {
           commentsData += chunk;
        });
        req.addListener("end",function () {
            route(handle, pathname, res, commentsData);
        })
        // res.write('<h2>Hello World!</h2>'); //write a response to the client
        // res.end(); //end the response
    }).listen(8080); //the server object listens on port 8080
    console.log("Server started");
}
exports.startServer = startServer;