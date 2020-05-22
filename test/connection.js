const mongoose = require("mongoose");
//connect to mongodb.If database testaroo does not exist then it will create one for us
mongoose.connect("mongodb://localhost/testaroo");
//ES6 Promise
mongoose.Promise = global.Promise;
//now we will tell when the application is complete and when to stop running the code
//on runs full time, once runs only once
//connect to the database before tests run
before(function(done){
    mongoose.connection.once("open",function(){
        console.log("Connection has been made");
        done();
    }).on("error",function(error){
        console.log(`Connection error: ${error}`);
    });
})


