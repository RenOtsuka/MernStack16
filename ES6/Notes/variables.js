
// var - func. scope
// let and const - block (lexical) scope; doesn't support hoisting

// console.log(my_let) //can't access before init.; hoisting not present

{
  var my_var = "new val"

  let my_let = "new let val"

  const my_const = "new const val"
}

// console.log(my_var);
// console.log(my_let);
// console.log(my_const);


// 2. init. and re-declare 
var my_var = "new val2";
var my_var = "new val3";

// let my_let = "new let val"
// let my_let = "new let val"; //can't be re-init/declare
// my_let = "new val for let" //can be re-assigned

// const can't be re-assigned 
// const my_const = "new val const"
// my_const = "new val const"
// console.log(my_const); //TypeError: Assignment to constant var


// 3. const needs to be assigned a val when declared
var my_var = "new val"
let my_let;
// const my_const; assignment is mandatory

// var my_var = "new val"
// let my_let = "new let val"
// const my_const = "new const val"


// constants are immutable but reference can be changed
const user = {
  name:"Jeffrey", session:"ES6"
}
// user = {name: "Nhi", session: "ECMAScript2015"} //can't re-assign contents
user.name = "Thanh" //still using the same obj so this is not re-assignment
// console.log(user)


// problems w/ func. scope var

// for(var index = 1; index < 5; index++){
//   setTimeout(() =>{
//     console.log("Incr. value " + index) //refers back when var index = 5 (not eval. instantly when asynch; makes a reference for later) 
//   },1000)

// }

// for(let index = 1; index < 5; index++){
//   setTimeout(() =>{
//     console.log("Incr. value " + index)
//   },1000)

// }

//using IIFE to get value immediately
// for(var index = 1; index < 5; index++){
//   (function(params){
//     setTimeout(() =>{
//         console.log("Incr. value " + params)
//       },1000);
//   })(index)
// }


// console.log("Last Incr. value " + index)
