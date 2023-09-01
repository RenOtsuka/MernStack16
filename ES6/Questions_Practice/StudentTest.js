//print firstname and sessionTopics, along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest
//Hint use destructuring

let StudentTest = {
  firstname : "Ryan",
  address : "Earth",
  sessionTopics : {
      covered1 : "CoreJS",
      covered2 : "OOJS"
  }
}

let {firstname, lastname = "DS", address, sessionTopics:{covered1, covered2, covered3 = "ES6"}} = StudentTest;


// console.log(firstname)
// console.log(covered1, covered2, covered3)


//create a funtion with name multiply which accepts three parameters, and return multiplication of all but if we dont pass any parameter it returns 0

function multiply(a = 0, b = 0, c = 0){
  return (a * b * c);
}

// console.log(multiply(1,2,3))
// console.log(multiply())


//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

let arr = [1,2,3,4,5];
arr.newval = "at 6th place"

// for(let i in arr){
//   const val = arr[i]
//   console.log(val)
// }

// for(let j of arr){
//   console.log(j)
// }


//create an example of const where we can update on property of the object, where it says const is mutable

const person = {firstname: "Bob", lastname:"Smith"}
// console.log(person)
// person.firstname = "Robert"
// console.log(person)

//create a for loop using var and let, print each value in timeout after 2 second and to demonstrate functional scope of var and lexical of let 

// for(var i = 0; i < 4; i++){
//   setTimeout(() => console.log(i),2000);
// }

// for(let i = 0; i < 4; i++){
//   setTimeout(() => console.log(i),2000);
// }