//Global and Local - Variables/Scope

globalThis.connectionString = "synergisticit.com/api/getpractionerdata"

//object literal
var AccountUser = {
    Name : "Jeffrey",
    Age : 22,
    AccountBalance : "$50000"
}

console.log(AccountUser.AccountBalance)
console.log(AccountUser.Name)


AccountUser.Name = "Jon" //updating the values

console.log(AccountUser.Name)

var Vehical = {
    Tyres : 5,
    AirBags : 4
}


module.exports = AccountUser

//module.exports = { AccountUser, Vehical }