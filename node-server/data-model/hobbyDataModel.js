
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack16"); 

let hobbySchema = new schemaObj({
    hobbyName : {type: String, required : true}, 
}
// ,{
//     versionKey: false //false - set to false then it wont create in mongodb
// }
);

let HobbyModel = mongooseObj.model("hobby",hobbySchema);

module.exports = HobbyModel;