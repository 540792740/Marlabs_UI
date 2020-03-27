var queryString = require('querystring');

function home(res){
    console.log("The home handler")
    var htmlFile =
        '<html>'+
        '<head>' +
        '</head>' +
        '<body>'+
        '<form action="/comments" method = "post">'+
        '<textarea name="text" id="" cols="30" rows="10"></textarea>' +
        '<input type="submit" value="Submit">' +
        '</form>' +
        '</body>' +
        '</html>';

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(htmlFile);
        res.end();
}
function comments(res, commentsData){
    console.log("the comments handler");
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("COMMENTS: " + queryString.parse(commentsData).text);
    res.end();
}


//contact
exports.home = home;
exports.comments = comments;