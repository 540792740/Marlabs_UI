var fs = require('fs');

//Example 1
// var readableStream = fs.createReadStream('../src/Marlabs_Course/Mar_27.txt');
// var writableStream = fs.createWriteStream('../src/Marlabs_Course/Mar_27_output.txt');
// readableStream.pipe(writableStream);

//Example 2
fs.appendFileSync('../src/Marlabs_Course/Mar_27.txt','\ndata to Append');
fs.appendFile('../src/Marlabs_Course/Mar_27.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});