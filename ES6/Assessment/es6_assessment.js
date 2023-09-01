// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//a.
let not_evil = heroes.filter((person) => person.isEvil == false);
// console.log(not_evil)


// b.
let uniqueFamily = heroes.reduce((prev, curr, index, arr) => {
  prev[curr.family] = prev[curr.family] ? prev[curr.family] + 1 : 1;

  return prev;
}, new Set())
// console.log(uniqueFamily)

//c.
let sir_obj = heroes.map((person) => `${person.name} sir`)
// console.log(sir_obj)

//d.
let marvel_not_evil = heroes.filter((person) => {
   if(person.isEvil == false && person.family == "Marvel"){
    return person;
   }
});
// console.log(marvel_not_evil)



//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

let myMap = new Map();

myMap.set("set", "This is a setter function")
myMap.set("get", "This is a getter function")
myMap.set("clear", "This is a clear function")
myMap.set("delete", "This is a delete function")
// console.log(myMap.get("set"))

let mySet = new Set([6,5,4,3,2,1])
// console.log(mySet)


//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

let prom_obj = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve({
      "features": ["promise", "template literals", "let and const", "iterators", "destructuring"]
    })
  },2000);

  setTimeout(() => {
    reject({
      "status": "failed"
    })
  },3000)
})

// prom_obj.then((data) => console.log(data)).catch((err) => console.log(err))


//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

let students = ["ryan", "bob", "arit", "sai"]

function multiply(n, ...params){
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }

  for(let key of params){
    console.log(key)
  }

  return sum;
}

// console.log(multiply(6,...students))



//5. Print the last name through destructuring and add a contact number:9119119110 as well

const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
let {userDetails:{first, last, contact_number = 9119119110}} = person;
// console.log(last)


//6. Give me an example of const data manipulation

const obj = {
  name:"ryan", 
  age: 21
}
// console.log(obj)

obj.name = "bob"
// console.log(obj)



//7. What is the difference between for-of and for-in show with examples


// for in is a loop that iterates over property values. It's mainly used for objects with key-value pairs

let obj2 = {name:"john", age: 23}
// for (let key in obj2) {
//   let val = obj2[key];
//   console.log(val)
// }


//for of is a loop that iterates over property names. It's mainly used for arrays

let arr2 = [1,2,3,4,5,6,7]
// for (let itr of arr2) {
//   console.log(itr)
// }



//8. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded

let signin = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      "status_code": 200,
      "status:" : "successfully signed in"
    })
  },2000)

  setTimeout(() => {
    reject({
      "status_code": 500,
      "status:" : "failed to sign in"
    })
  },3000)
})

let userregistration = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve({
      "status_code": 200,
      "status:" : "successfully registered"
    })
  },2000)

  setTimeout(() => {
    reject({
      "status_code": 500,
      "status:" : "failed to register"
    })
  },3000)
})

let nextpageToNavigate = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      "status_code": 200,
      "status:" : "successfully went to next page"
    })
  },2000)

  setTimeout(() => {
    reject({
      "status_code": 500,
      "status:" : "failed to to go to the next page"
    })
  },3000)
})

// Promise.all([signin, userregistration, nextpageToNavigate]).then((data) =>{
//   console.log(data)
//   console.log("\nMoving to next page")
// }).catch((err) => console.log(err))



//9. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first two fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios


// Promise.allSettled([signin, userregistration, nextpageToNavigate]).then((data) => {
//   console.log(data)

//   if(data[0].status =='rejected' || data[1].status =='rejected'){
//     console.log("No action is being taken")
//   }
//   else{
//     console.log("Moving to next page")
//   }
// })


// Optional -
//10. Using the promise object at #3 create an async and await feature


