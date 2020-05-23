//not necessary to add though
const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("../models/mariochar");
//we have to describe our tests in mocha
describe("Updating records",function(){
    //create tests through it blocks. Each it block decribes a single test
    var char;
    beforeEach(function(done){
        //creating new instance for the database
        char = new MarioChar({
            name:"Mario",
            weight: 50
        })
        //saving the character to database, as we have already connected to testaroo mongoose knows where to put the database. Also the save is an asynchronous request so we use promise to use assert  
        char.save().then(function(save){
            //isNew returns true if character is made but not saved to database. If its saved so no longer new and hence returns false
            assert(char.isNew === false);
            //done parameter to tell when the test is complete and move on
            done();
        });
    })
    it("Update one record from the database",function(done){
        MarioChar.findOneAndUpdate({name: "Mario"},{name: "Luigi"}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === "Luigi");
                done();
            })
        })
    })
    //updating using update operator(like increment/rename)
    //we leave empty object so that it returns every record
    it("Increment the weight by one",function(done){
        MarioChar.update({},{$inc: {weight: 1}}).then(function(){
            MarioChar.findOne({name:"Mario"}).then(function(record){
                assert(record.weight === 51);
                done();
            })
        })
    })        
})
//to run test using npm test, change the script {test:"mocha"} in package.json file