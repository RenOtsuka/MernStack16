
var User = {
  Name: "Arit",
  Age: 22,
  Session: "MERNStack",
  getUserDetails: function(){
    return {
      Name: this.Name,
      Session: this.Session,
      Address: this.Address
    }
  }
}

User.Address = "Somewhere on Earth";
// console.log(User.getUserDetails())


// Inheritance of JS Object
// 1. use  'new' keyword - not the right way but is a good way to extend

// var Engineer = new Object(User);
// Engineer.Name = "Dillon"
// Engineer.Speciality = "Mechanical Engineer"
// console.log(Engineer.Session)

// Engineer.getSpecialityAndAddress = function(){
//   return {
//     Session: this.Session,
//     Address: this.Address,
//     Speciality: this.Speciality
//   }
// }
// console.log(Engineer.getSpecialityAndAddress())

// Override
// Engineer.getUserDetails = function(){
//   return {
//     Speciality: this.Speciality,
//      Address: this.Address,
//     Name: this.name
//   }
// }
// console.log(Engineer.getUserDetails())
// console.log(User.getUserDetails())

// 2. Object.create({}) - correct way of overriding
var Engineer = Object.create(User);
Engineer.Name = "Dillon"
Engineer.Speciality = "Mechanical Engineer"
// console.log(Engineer.Session)

Engineer.getSpecialityAndAddress = function(){
  return {
    Address: this.Address, // this - is the scope, context and is dynamic object
    Speciality: this.Speciality
  }
}
// console.log(Engineer.getSpecialityAndAddress())


// Override
Engineer.getUserDetails = function(){
  return {
    Speciality: this.Speciality,
    Address: this.Address,
    Name: this.Name
  }
}

// console.log(Engineer.getUserDetails())
// console.log(User.getUserDetails())

// console.log(Engineer.__proto__)
// console.log(User.__proto__)

// 3. Prototype of Empty Obj
var empty = {}

// 4. Obj w/o prototype (stops prototype chaining)
var noProto = Object.create(null)

// 5. Object.Assign
var obj1 = {name: "Anant", add1: "Lake City 1"}
var obj2 = {name: "Anant", add2: "Lake City 2"}
var obj3 = {name: "Anant", add3: "Lake City 3"}
var actualObj = {obj1, obj2, obj3}
obj1.session = "Object Session" //copying of data (mutability)
console.log(actualObj)

var actualObj2 = {};
Object.assign(actualObj2, obj1, obj2, obj3)

//preserves immutablility
obj1.session2 = "Session 2 on object" 
console.log(actualObj2)