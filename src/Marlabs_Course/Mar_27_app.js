var server = require("./Mar_27_server");
var router = require('./Mar_27_router');
var handler = require('./Mar_27_handler');


var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/comments"] = handler.comments;

server.startServer(router.route, handle);
