// var - gets hoisted w/ default val (undefined)
// func gets hoisted w/ their definition


console.log(print(20,21)) //print is not a function (print is var w/ default undefined val)

console.log(var1) //undefined
console.log(name) //func w/ def
console.log(name())

var var1 = 1;

function name(params){
  console.log("This is a hoisted function");
}

var print = function(a,b){
  return a + b; 
}
