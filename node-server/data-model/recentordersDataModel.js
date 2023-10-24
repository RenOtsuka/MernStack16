
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack16"); 

let recentOrdersSchema = new schemaObj({
    userid : {type: String, required : true}, 
    order: { Object, required : true},
    dateTime: {type: Date, retquired: true}
}
// ,{
//     versionKey: false //false - set to false then it wont create in mongodb
// }
);

let RecentOrdersModel = mongooseObj.model("recentOrders",recentOrdersSchema);

module.exports = RecentOrdersModel;