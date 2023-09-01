

var someVal = 2500;

function ScopedFunction(params){ //hoisting occured in this func
  // console.log(innerVal) //1 - undefined
  // var innerVal = 5000;

  console.log(someVal) //2 - 2500 if line 11 is used; undefined if line 10 is used
  var someVal = 7500 //var redefined so default val is undefined
  // someVal = 7500;

  // innerVal = 10000;
  // console.log(innerVal) //3 - 10000
}

console.log(someVal)
//console.log(innerVal)
ScopedFunction(); //global scope and exec. context

//How scope works:
// var BaseClass = new BaseClass();
// BaseClass.ScopedFunction();

var address = "Somewhere on Earth"

var Engineer = {
  name: "Van Duc",
  age: 21,
  getDetails: function(){
    return {
      Name: this.name, //'this' is execution context(uses name from this Engineer obj);
      Age: this.age,    //other wise use name from prototype(parent obj)
      Address: this.address //no address var in Engineer 
    }
  }
}

console.log(Engineer.getDetails())