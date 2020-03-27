var fs = require('fs');

// var readableStream  = fs.createReadStream('Mar_27.txt');

// var data = "";
// readableStream.setEncoding('UTF8');
//
// readableStream.on('data',function (chunk) {
//     data += chunk;
//     console.log("-------------");
//     console.log(chunk);
//     console.log("-------------");
// });
// readableStream.on('end',function () {
//     console.log("-------------");
//     console.log(data)
// });


var data = "Some dummy data to write";
var writableStream = fs.createWriteStream('Mar_27_output.txt');
writableStream.write(data,'UTF-8');
writableStream.end();
writableStream.on('finish', function () {
    console.log("Finish Writing")
});