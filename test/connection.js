const mongoose = require("mongoose");
//connect to mongodb.If database testaroo does not exist then it will create one for us
mongoose.connect("mongodb://localhost/testaroo");
//ES6 Promise
mongoose.Promise = global.Promise;
//now we will tell when the application is complete and when to stop running the code
//on runs full time, once runs only once
//connect to the database before tests run
//done tells when to move on to running the test
before(function(done){
    mongoose.connection.once("open",function(){
        console.log("Connection has been made");
        done();
    }).on("error",function(error){
        console.log(`Connection error: ${error}`);
    });
})
//emptying the database before every single test so that each test can run in isolation
//Drop the characters collection before each test
beforeEach(function(done){
    //robomongo pluralises our collection name as it assumes each collection to have multiple entries
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})


