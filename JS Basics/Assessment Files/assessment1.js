//Q1. Create a file with name basics and show all the features that you know about javascript

// See basics file

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

var obj = "Robert"
// console.log(typeof(obj))
obj = .0266
// console.log(typeof(obj))
obj = false
// console.log(typeof(obj))
obj = {myname : "Test Me"}
// console.log(typeof(obj))
obj = 25166665
// console.log(typeof(obj))
obj = undefined
// console.log(typeof(obj))
obj = true
// console.log(typeof(obj))
obj = "Robert Jr."
// console.log(typeof(obj))
obj = null
// console.log(typeof(obj))
obj = {}
// console.log(typeof(obj))
obj = -32767
// console.log(typeof(obj))


//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function showUserInfo(firstname, lastname, age){
  console.log(firstname)
  console.log(lastname)
  console.log(age)

}
showUserInfo("Ryan", "Delos Santos", 25);


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind


function doaddition(a,b,c){
  return a + b + c;
}

//all the types of the params are the same (integer) so it adds the numbers successfully
console.log(doaddition(2,3,4)) 

//only 1 param is passed and the other variables have a default value of undefined so trying to add a number to this results in NaN (Not a Number) 
console.log(doaddition(2))

//only 2 params are passed and one param has a default value of undefined so similar to the previous function call, it results in NaN 
console.log(doaddition(2.3,3))

//since 2 strings are passed the operation being done is not addition anymore, but concatenation
console.log(doaddition("first", 2, "three"))



//Q5. A detailed example implementation of event loop using multiple settimeouts

console.log("Start")

setTimeout(function(){console.log("First"); setTimeout(function(){console.log("Last")},0)},1000)

setTimeout(function(){console.log("Second")},2000)

setTimeout(function(){console.log("Third")},3000)

setTimeout(function(){console.log("Fourth")},1000)

console.log("End")


//Expected Output: Start, End, First, Fourth, Last, Second, Third
//Start and End gets printed immediately as there's no timeout associated with it. First and Fourth gets printed next as it has the shorted timeout and immediately after
// the inner function of First prints Last. Then Second and Third gets printed sequentially based on their timeouts


//Q6. Print the topics you remember so far exporting it from one file and printing in another

var getTopicList = require("./export")
for(i in getTopicList){
  console.log(getTopicList[i])
}


//Q7. Give me an example of your choice on closure, callback, prototype, each.


//prototype

var person = {
  Name: "Ryan",
  Age: 25,
  getDetails: function(){
    return {
      Name: this.Name,
      Age: this.Age
    }
  }
}

var boxer = Object.create(person);
boxer.height = "5'10"
boxer.reach = "70\""

boxer.getDetails = function(){
  return{
    Name: this.Name,
    Height: this.height,
    Reach: this.reach
  }
}

console.log(person.getDetails())
console.log(boxer.getDetails())

