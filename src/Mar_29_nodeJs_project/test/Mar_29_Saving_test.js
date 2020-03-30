const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../module/Mar_29_Mariochar');

//Describe the test
describe('Saving Records', function () {
    it('Saving a document to the database', function (done) {

    var char = new MarioChar({
            name:'Mario',
            weight:100
        });
        char.save().then(function () {
            assert(char.isNew === false);
            done()
        })
    });
});