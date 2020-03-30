const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../module/Mar_29_Mariochar');

//Describe the test
describe('Finding Records', function () {
    var char;
    this.beforeEach(function (done) {
        char = new MarioChar({
            name:'Mario',
            weight:100
        });
        char.save().then(function () {
            assert(char.isNew === false);
            done()
        })
    });
    it('Find a record from the DB',function (done) {
        MarioChar.findOne({name:'Mario'}).then(function (result) {
            assert(result.name === 'Mario')
            done();
        })
    });
});