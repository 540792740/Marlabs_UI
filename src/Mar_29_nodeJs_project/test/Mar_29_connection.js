const mongoose = require('mongoose');

//ES6
mongoose.Promise = global.Promise;


// Connect to the db before tests run
before(function (done) {
    mongoose.connect('mongodb://localhost/testdb');
    mongoose.connection
        .once('open',function () {
            console.log("Connected Successfuly");
            done();
    }).on('error', function (error) {
        console.log('connection Error: ', error);
    });
});

// Drop all data and only run one time, avoid Redundant
beforeEach(function (done) {
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    })
});