const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb');
mongoose.connection.once('open',function () {
    console.log("Connected Successfuly")
}).on('error', function (error) {
    console.log('connection Error: ', error);
});