let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack16"); //creates db with name mernstack5 or opens a connection if already present

let ProductSchema = new schemaObj({
    name: {type:String, required:true},
    price: {type:Number},
    desc: {type:String},
    rating: {type:String},
    qty: {type: Number, default:1}
    },
    {
        versionKey: false //false - set to false then it wont create in mongodb
    });

let ProductModel = mongooseObj.model("product",ProductSchema);
module.exports = ProductModel;
//note: donot put versionkey to true or it will start throwing error