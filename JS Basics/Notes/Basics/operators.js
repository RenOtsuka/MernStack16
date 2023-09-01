// Operators like logical operators (&&, ||, ==, ===, etc.)

// ternary operator - ?
var age = "18"
var isValidID = true

if(isValidID  && age == 18){ // == : only compares data/content
  console.log("Is valid voter")
}
else{
  console.log("Is not valid voter")
}

// compares data and type w/ ===
(isValidID  && age === 18) ? console.log("Is valid voter") :  console.log("Is not valid voter") //ternary operator


if(age < 20){
  console.log("age is less than 20")
}


