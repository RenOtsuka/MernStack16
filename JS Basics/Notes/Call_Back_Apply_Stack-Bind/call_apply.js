name = "Arit" //global var
age = 23


var user = {name:"Thahn Le", age: 21, session:"JS"}
var user2 = {name:"Liam Le", age: 21, session:"OOJS"}

function GetDetails(concept, session1, session2, session3,session4, session5){
  // console.log(this)

  console.log(`Call Extension - ${concept}`)
  console.log(`${session1} ${session2} ${session3} ${session4} ${session5}`)

  console.log(`The User Details are as below: 
    Name is - ${this.name} 
    Age is - ${this.age}
    Session is - ${this.session}`);
}

// GetDetails("params"); //this takes global scope 

GetDetails.call(user, "Basic JS concepts") //first param sets the scope of the func, next params needed for the func
GetDetails.call(user2, "Advanced JS concepts")


//apply is used to set scope and pass params as an arr
GetDetails.apply(user,["JS", "ES6", "NODEJS", "Express", "React", "Redux"])
GetDetails.apply(user2,["JS", "ES6", "NODEJS", "Express", "React", "Redux"])


//to set some delay in exec we use - setTimeout function from JS
setTimeout(function(params){
  console.log("Printed after 2 secs")
}, 2000) //time in ms after which we want to exec