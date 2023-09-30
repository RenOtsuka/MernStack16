
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack16"); 

let ProductSchema = new schemaObj({
    name : {type: String, required : true}, 
    price: {type:Number, required : true},
    desc: String,
    rating: Number
});

let ProductModel = mongooseObj.model("product",ProductSchema);

module.exports = ProductModel;