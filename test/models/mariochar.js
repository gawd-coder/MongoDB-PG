const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema and model
//we can create a mario char that does not have a particular schema property
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});
//mariochar is the collection name/ name of the model
const MarioChar = mongoose.model("mariochar",MarioCharSchema);
module.exports = MarioChar;

// //to create an object simply: 
// var my Char = new MarioChar({
//     //pass the properties here
// })
