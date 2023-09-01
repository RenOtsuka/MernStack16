// Polymorphism
// 1. Overloading - No concept of this in JS but overwriting w/ last def
// 2. Overriding

Print(1,2,3) //three params

function Print(a){
  console.log("one param" + a);
}

Print(1) //one param

function Print(a,b){
  console.log("two params" + a + b);
}

Print()

function Print(a, b, c){
  console.log("three params" + a + b + c);
}

Print(1,2) //two params