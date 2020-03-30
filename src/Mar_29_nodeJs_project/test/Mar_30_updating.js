const assert = require('assert');

const MarioChar = require("../module/Mar_29_Mariochar");

//Describe the test
describe('updating records', function (done) {
    var char;
    beforeEach(function (done) {
        char = new MarioChar({
            name:'Mario',
            weight:50
        });
        char.save().then(function () {
            done();
        });
    });
    it ('Updating the name of the document', function (done) {
            MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(function () {
                MarioChar.findOne({_id:char.id}).then(function (result) {
                    assert(result.name === 'Luigi');
                    done();
                });
            });
        });
        it('Increments weight by 1 of every record', function (done) {
            MarioChar.update({},{$inc:{weight:2}}).then(function () {
                MarioChar.findOne({name:'Mario'}).then(function (record) {
                    assert(record.weierp === 52);
                    done();
                });
            });
    });
});
