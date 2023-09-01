// for in loop - iterates over the property val => for json obj (key, value)

let person = {fname: "John", lname: "Doe", age:25, address:{}}

for(const key in person){
  console.log(key)
  const element = person[key];
  console.log(element)
}

console.log("For In Loop")

let arr = [3,5,7] //{0:3,1:5,2:7}
arr.newKey = "Dillon"

for(const key in arr){
  console.log(key)
  const element = arr[key];
  console.log(element)
}

// for(const index of arr){
//   console.log(index)
// }

// for of loop - strictly for an array (index based)
console.log("\nFor Of Loop")

let cars = ['BMW', 'Volvo', 'Mini']

console.log(cars)

for(const car of cars){
  console.log(car)
}