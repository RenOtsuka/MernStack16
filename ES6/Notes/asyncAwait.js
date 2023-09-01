
// stack1(main thread) - 200 MB (300 requests/s)
// => if requests inc. to 600 requests/sec

//async - creates multithread
//await
//stack2(thread) - 100 MB (100 requests/sec)
//stack3(thread) - 100 MB (100 requests/sec)
//stack4(thread) - 100 MB (100 requests/sec)

function resolveAfter2Sec(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        "statusCode": 200,
        "statusMsg": 'resolved'
      });
    }, 2000);
  });
}

// console.log("async exec starts");

async function asyncCall(){

  console.log("Before await");

  await resolveAfter2Sec() //this is a blocking exec in a separate thread
  .then((data) => {console.log(data)})
  .catch((err) => {console.log(err)});
  console.log("After await");

  await resolveAfter2Sec() //this is a blocking exec in a separate thread
  .then((data) => {console.log(data)})
  .catch((err) => {console.log(err)});
  console.log("After await second time");

}

// asyncCall();
// console.log("async exec ends");




//Assignment: 

// print user info like - name, address, account number after 3 seconds using async await
//also check when it rejects after 2 seconds
//analyze how await works as blocking exec


function printUserInfo(name, addr, accNum){

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve({
        "statusCode": 200,
        name,
        addr,
        accNum
      })
    },3000);

    // setTimeout(() => {
    //   reject({
    //     "statusCode": 500,
    //     "statusMsg": "Failed to get user info"
    //   })
    // },2000);

  });
  
}

async function asyncPrint(name, addr, accNum){

  console.log("Before await");

  await printUserInfo(name, addr, accNum) .then((data) => {console.log(data)})
  .catch((err) => {console.log(err)});

  console.log("After await");
}

// asyncPrint("Ryan", "Earth", 123);




// create one set of map using different types of key and at least show the usage of 4 functions(.get, .clear, etc.)

let map1 = new Map();

let k1 = "key", k2 = 1, k3 = {}, k4 = function(){};

map1.set(k1, "String")
map1.set(k2, "Num")
map1.set(k3, "Object")
map1.set(k4, "Func")

console.log(map1.get(k1))
console.log(map1.has(k2))
map1.delete(k4)
map1.clear()

// create a list using set show the usage of 5 functions(.add, .get, .clear, etc.)


let set1 = new Set([1,2,3,4,5,6]);

set1.add(7)
console.log(set1.values())
console.log(set1.entries())
set1.delete(1)
console.log(set1.has(4))


//create and example of arithmetic operations (add, sub, mul, div) using generator


function *arithmeticCalculation(num1, num2){

  yield console.log("Add: " + (num1 + num2));
  yield console.log("Sub: " + (num1 - num2));
  yield console.log("Mul: " + (num1 * num2));
  yield console.log("Div: " + (num1 / num2));

  return "Done";
}

let calc = arithmeticCalculation(2,1);
// calc.next();
// calc.next();
// calc.next();
// calc.next();


