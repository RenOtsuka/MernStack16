//syntax - uses elipsis before the obj/arr name

let arr = [1,2,3,4,5,6]
// console.log(...arr)



//spread is used to combine 2 obj and preserve the immutability of each object

let User = {name: "Ryan", age: 25}
let Address = {home:"US", office:"virtual"}
let Employee = {...User, ...Address} //like using Object.assign (makes merge immutable)
User.session = "ES6"
// console.log(User)
// console.log(Employee)



function Sum(p1,p2,p3,p4,p5){
  return p1+p2+p3+p4+p5;
}
let arrNum = [25,26,2,7,8,9]
// console.log(Sum.apply(null, arrNum));
// console.log(Sum(...arrNum)) // using spread to pass arr val




//Rest - parameter, is just setting up ... to combine multiple values

// function SumRest(p1,p2, ...restParams){
//   console.log(...restParams);
//   return p1 + p2;
// }
// console.log(SumRest(...arrNum))


//using Rest w/ Reduce function to get addition of unlimited params

function SumRest(...restParams){
  let sum = 0;
  sum = restParams.reduce((prevVal, curVal, index, arr) => {
    console.log("prevVal: " + prevVal)
    console.log("curVal: " + curVal)
    console.log("index: " +index)
    console.log("arr: " +arr)
    console.log("Next iteration...")
    return prevVal + curVal
  },0);

  return sum;
}
console.log(SumRest(...arrNum))