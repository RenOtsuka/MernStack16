//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers


function generateArr(start, end){

  let diff = (end - start);
  let arr = new Array(diff);
  
  for(let i = 0; i <= diff; i++){
    arr[i] = i + start;
  }
  return arr;
}

function largesum(...arrayOfNums){
  let sum = 0;
  sum = arrayOfNums.reduce((prev, curr) => {
    return prev + curr;
  });
  return sum;
}

let finalArr = generateArr(100,150);

// console.log(...finalArr)
console.log(largesum(...finalArr))

