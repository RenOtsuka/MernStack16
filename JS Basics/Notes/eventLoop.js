

console.log("Exec. start");

setTimeout(function name(){

  console.log("First Callback");

  setTimeout(function name(){

    console.log("Inner Callback");
    
  },0)

},1000)

setTimeout(function name(){
  console.log("Second Callback");
},1000)

setTimeout(function name(){
  console.log("Third Callback");
},1000)

console.log("Exec. end");