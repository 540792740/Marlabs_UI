function route(handle, pathname) {
    console.log("Routing a Request for: "  + pathname)

    if(typeof handle[pathname] ==='function'){
        handle[pathname]();
    }
    else{
        console.log("No Handler for : " + pathname)
    }
}
exports.route = route;