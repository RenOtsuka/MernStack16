// JS is single threaded lang.

console.log("Execution Starts")

function Foo(params){
    throw new Error("This is callStack execution")
}

function Bar(){
  Foo();
}

function Bazz(){
  Bar();
}

Bazz();

// console.log("Execution Ends")


// Blowing up of stack=
function BlowupStack(){
  BlowupStack(); //infinite loop
}

// BlowupStack(); //max call stack size exceeded