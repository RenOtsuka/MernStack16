//reduces init of global var and helps re-using arr

// let firstName = "", lastName = "", email = ""
// let [firstName, lastName, email] = ["Arit", "Chanda", "arit@arit.com"]

// console.log(firstName)
// console.log(lastName)
// console.log(email)


// 2. default val

let [firstName, lastName, email, address = "US"] = ["Arit", "Chanda", "arit@arit.com"]
// console.log(firstName)
// console.log(lastName)
// console.log(email)
// console.log(address)


// 3. Can store the rest of the values in the last element (like using spread operator)

let [a,b,c,...last] = [1,2,3,4,5,6,7,8,9]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(last)


// 4. Can swap val.

let x=5, y=6;
[x,y] = [y,x];

// console.log(x)
// console.log(y)


// Object Destructuring

// 1. reading val from obj

let account = {name:"Van Duc", balance:"$50000", mortgage:"none", address: "US"}
// let {name, balance, type = "Credit"} = account;

// console.log(name)
// console.log(balance)
// console.log(type)


// 2. nested destructuring

let student = {name:"Jason", branch: "Science", subjects:{math:99, english:95, chemistry:96}}

let {name, subjects:{math, chemistry, physics = 99}} = student;
console.log(name)
console.log(math)
console.log(physics)