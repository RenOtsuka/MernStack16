//OOP Fundamentals

// 1. Inheritance - constructor function, classes, prototype
// 2. Encapsulation - hiding data thru closures (w/ access modifiers i.e. private, public, protected)
// 3. Polymorphism - Overriding(uses last def. of method) and Overloading(not supported)
// 4. Abstraction - not required in js


//Closure - parent func w/ global var and child funct encapsulates data
function Parent(name, age){

  var _name = name;
  var _age = age;
  var accountBalance = "$5000"; //can be shared
  var accountPassword = "45343w53$"; //should be private

  var child = function GetAccountInfo(acctNo, pwd){
      //write the func properties that needs to be used by outer world
      return{
        Name: _name, 
        // Age: _age,
        accountBalance, //short hand for => accountBalance: accountBalance,
        AccountNo: acctNo
      }
  }
  return child;
}

var acct = Parent("Lemar", 21);
console.log(acct(123456,"pass"))