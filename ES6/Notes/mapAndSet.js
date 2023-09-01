//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

//[{key : "value"}]
let myMap = new Map();

//let user = [{Name : "Dillon"},{Address : {Address1}},{}]
                                    //2324
let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "This is a string key")
myMap.set(keyObj, "This is a object key")
myMap.set(keyFunc, "This is a function key")
myMap.set(keyNum, "This is a number key")

console.log(myMap.get('a string'))
console.log(myMap.get(keyNum))
// console.log(myMap)
// console.log(myMap.entries())
                    //2329
console.log(myMap.get({})) //interprets as a new empty obj
console.log(myMap.get(keyObj)) // references the keyObj key

//console.log(myMap.clear())
console.log(myMap.delete(keyObj))
console.log(myMap.has(keyString))

console.log(myMap.entries())



//when we need a iterable/collection with unique values
//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["Liam le","Jason", "Anant", "David", "Nhi", "Lyuin"])

console.log(StudentSet.values())

console.log(StudentSet.add("Nhi"))

console.log(StudentSet.values())