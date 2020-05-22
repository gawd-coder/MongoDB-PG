//not necessary to add though
const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("../models/mariochar");
//we have to describe our tests in mocha
describe("Saving records",function(){
    //create tests through it blocks. Each it block decribes a single test
    it("Saves a record to the database",function(done){
        //creating new instance for the database
        var char = new MarioChar({
            name:"Mario",
        })
        //saving the character to database, as we have already connected to testaroo mongoose knows where to put the database. Also the save is an asynchronous request so we use promise to use assert  
        char.save().then(function(){
            //isNew returns true if character is made but not saved to database. If its saved so no longer new and hence returns false
            assert(char.isNew === false);
            //done parameter to tell when the test is complete and move on
            done();
        });
    })
})
//to run test using npm test, change the script {test:"mocha"} in package.json file