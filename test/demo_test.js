//not necessary to add though
const mocha = require("mocha");
const assert = require("assert");

//we have to describe our tests in mocha
describe("some demo tests",function(){
    //create tests through it blocks. Each it block decribes a single test
    it("adds two number together",function(){
        //predict the expected result of test
        assert(2+5 == 7)
    })
})
//to run test using npm test, change the script {test:"mocha"} in package.json file