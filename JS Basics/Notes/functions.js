
//1. Named function
function PrintSum(a,b){
  return a + b;
}
console.log(PrintSum(5,9));


//2. Function expression
var DoSum = function Func(c,d){
    return c + d;
}
console.log(DoSum(1,2));


//3. Immediately invocable function expression (IIFE)
(function IIFE(params){
  console.log(params)
})("Ryan")
//IIFE("Sai") - as soon as exec is done IIFE will not be accessible again


//4. Constructor Function
function Vehicle(numOfSeats, numOfAirBags){
  this.Seats = numOfSeats;
  this.AirBags = numOfAirBags;

  this.GetDetails = function(){
    return {
      "Seats": this.Seats,
      "Airbags": this.AirBags
    }
  }
}

var vehObj = new Vehicle(6,5);
console.log(vehObj.GetDetails());


function Pc(numOfCpu, numOfGpu){
  this.cpu = numOfCpu;
  this.gpu = numOfGpu;
}


// 5. Nested functions
function Login(params){

  function AuthenicateUser(params){

    function AuthorizeUser(params){

      function CreateSession(params){

        function NavigateUser(params){

        }
      }
    }
  }
}

