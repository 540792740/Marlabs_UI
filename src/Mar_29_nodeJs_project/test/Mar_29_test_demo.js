const mocha = require('mocha');
const assert = require('assert');

//Describe the test
describe('Demo test to check mocha', function () {
    // Write the tests
    it('Adds two numbers', function () {
        assert(2 + 2 === 4);
    });
});