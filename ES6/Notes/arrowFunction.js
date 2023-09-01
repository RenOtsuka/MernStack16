//aka fat arrow function or lambda expression

// 1. easy and shorter way of defining functions, like lambda expr.
// 2. resolves context of a function by copying the context of immediate parent

function add(a,b){
  return a + b
}

// console.log(add(10,9))

// let addArrow = (a = 0,b = 0) => {
//   return a + b
// }

let addArrow = (a = 0,b = 0) => a + b

// console.log(addArrow(10,9))


// resolving context

let User = {
  FirstName: "David",
  Session: "Arrow Function - ES6",
  getInfo: function(){
    console.log(`
    ${this.FirstName}
    ${this.Session}
    `)

    setTimeout(() => { //copies context of parent, which is User
      console.log(`
        ${this.FirstName}
        ${this.Session}
      `)
    }, 2000)

    // Old way:
    // let _this = this; //copies the context of getInfo to be used in setTimeout
    // setTimeout(function(){ //context here is of setTimeout, not User
    //   console.log(`
    //     ${_this.FirstName}
    //     ${_this.Session}
    //   `)
    // }, 2000)

  }
}

// User.getInfo();


// Question: Create a Student Object with a couple of properties and a function - printStudent, implement arrow function in setTimeout

let Student = {
  Name: "Ryan",
  Age: 25,
  Gender: "Male",
  printStudent: function(){
   console.log(`${this.Name}, ${this.Age}`);

   setTimeout(() => {
    console.log(`${this.Name}, ${this.Age}`);
   },2000)
  }
}

Student.printStudent()
