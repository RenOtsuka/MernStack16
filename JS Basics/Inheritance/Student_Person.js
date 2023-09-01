
/* Assignment:
Person - object
Inherit as Student -
Overrride + object.assign
Prototype chain 
how to stop this protoype chain
*/

var Person = {
  Name: "Ryan",
  Age: 25,
  Gender: "Male",
  Height:"5'10",
  getDetails: function(){
    return {
      Name: this.Name,
      Age: this.Age,
      Gender: this.Gender,
      Height:this.Height
    }
  }
}

// console.log(Person)
console.log(Person.getDetails())

var Student = Object.create(Person); //inherit/prototype chaining
Student.Degree = "Computer Science"
Student.GPA = 3.5

Student.getDetails = function(){ //override
  return{
    Name: this.Name,
    Age:this.Age,
    Degree: this.Degree
  }
}
// console.log(Student)
console.log(Student.getDetails())
// console.log(Student.__proto__)

// ====================================================

var obj1 = {name: "Bob", Age: 27}
var obj2 = {name: "Bob", Gender:"Male"}
var obj3 = {name: "Bob", Height:"6'2"}

var Person2 = {obj1, obj2, obj3}
// console.log(Person2)
obj3.Height = "6'5"
// console.log(Person2)

//assign
var Person3 = {};
Object.assign(Person3, obj1, obj2, obj3); //takes care of dupe val
obj3.Height = "6'3" //makes data immutable
// console.log(Person3)

var noProto = Object.create(null); //stops prototype chaining

