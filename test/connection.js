const mongoose = require("mongoose");
//connect to mongodb.If database testaroo does not exist then it will create one for us
mongoose.connect("mongodb://localhost/testaroo");
//now we will tell when the application is complete and when to stop running the code
//on runs full time, once runs only once
mongoose.connection.once("open",function(){
    console.log("Connection has been made");
}).on("error",function(error){
    console.log(`Connection error: ${error}`);
});

