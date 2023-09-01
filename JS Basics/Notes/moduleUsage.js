//import using require keyword

var AcctUsr = require("./literals")

//console.log(AcctUsr) //both the objects

console.log("In Module Usage " + AcctUsr.AccountBalance)
console.log("In Module Usage " + AcctUsr.Age)

console.log("Node Global " + globalThis.connectionString)
