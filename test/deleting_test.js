//not necessary to add though
const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("../models/mariochar");
//we have to describe our tests in mocha
describe("Deleting records",function(){
    //create tests through it blocks. Each it block decribes a single test
    var char;
    beforeEach(function(done){
        //creating new instance for the database
        char = new MarioChar({
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
    it("Delete one record from the database",function(done){
        MarioChar.findOneAndRemove({name: "Mario"}).then(function(){
            MarioChar.findOne({name: "Mario"}).then(function(result){
                assert(result === null);
                done();
            })
        })
    })    
})
//to run test using npm test, change the script {test:"mocha"} in package.json file