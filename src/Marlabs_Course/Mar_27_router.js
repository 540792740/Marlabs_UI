function route(handle, pathname, res) {
    console.log("Routing a Request for: "  + pathname)

    if(typeof handle[pathname] ==='function'){
        handle[pathname](res);
    }
    else{
        console.log("No Handler for : " + pathname)
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write("error 404 not found");
        res.end();
    }
}
exports.route = route;