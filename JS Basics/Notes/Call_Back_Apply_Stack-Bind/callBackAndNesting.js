
var sessionName = "MERNStack Session";

function printSession(sessisonNumber, studentName){
  console.log(`Printing callback info - 
    ${sessisonNumber}  ${studentName} 
    ${sessionName}`); //template literls
}


function GetDetails(callbackPrint, sessisonNumber, studentName){
  callbackPrint(sessisonNumber,studentName);
}

GetDetails(printSession, 1, "David");
GetDetails(printSession, 2, "Jefrrey");
GetDetails(printSession, 3, "Sai");


//nested function and JS currying
var number1 = 20;

function A(a){
  //console.log(d) - scope of var dec. when we go up 
  //(child has access to parent but not vice versa)
  return function B(b){

    return function C(c){

      return function D(d){
        return a + b + c + d + number1;
      }
    }
  }
}

var _a = A(1)
var _b = _a(2)
var _c = _b(3)
var _d = _c(4)
console.log(_d)

//chain execution
var output = A(1)(2)(3)(4)
console.log(output)