// server dish - 5
// server dish - 10
// server dish - 15

//promise - wrappers that collects the responses and return when needed

//signinuser
// function Authentication(userInfo){ //login signup, create userSession

// }

// function Authorization(userInfo, sessionId){ // Permissions to access like admin

// }

// function Navigation(userInfo, permissions){ //what pages all users can navigate, returns to first page

// }

// function SigninSignupUser(authCallBk, authorizationCallBk, navigationCallBk){

//   let session = Authentication(username, password); //get valid user session

//   if(session == IsValid){

//     let permission = Authorization(user, session); //what if api crashes

//     let permissionPromiseObj = new Promise((resolve, reject) => {
//       if (permission.status == success) {
//          return resolve(permission) //this will be accessed in promise.then
//       } else {
//         return reject("No Response") //this will be accessed in promise.catch
//       }
//     });

//     permissionPromiseObj.then((obj) => {
//       //statement for successful calls
//     }).catch((error) =>{
//        //statement for failed calls
//     })

//     if (permission == "Admin") {
//       let nextPage = Navigation(permission);
//     } else if(permission == "Guest"){
//       let nextPage = Navigation(permission);
//     }
//     else{
//       //if not modularized well, then falls into an infinite loop of callbacks
//       SigninSignupUser(Authentication, Authorization, Navigation);
//     }

//   }
//   else{

//   }
// }



//Promises : These are the proxy objects that give us a control to check the status of promise and 
// upon revelant status we also get the type, payload associated with that in response

// promise will have 3 states - pending, fullfilled/resolved (then), rejected (catch)

let LunchPromise = new Promise((resolve, reject)=>{

  //set timeout is assumed to be the server call / async call
  setTimeout(() => {
      resolve({ //this out put is assumed to be sent from server in async call on success case
          "Planned" : "Yes",
          "Status" : "Success",
          "Status Code" : 200
      })
  }, 3000);    

  setTimeout(() => {
      reject({ //this out put is assumed to be sent from server in async call on success case
          "Planned" : "Yes",
          "Status" : "Failed",
          "Status Code" : 500
      })
  }, 2000);    
})

console.log("Promise Status!!! ", LunchPromise);

LunchPromise.then((data)=>{ //promise is resolved
  console.log(data)
}).catch((err)=>{ //promise is rejected - errorneous response
  console.log(err)
})

// console.log("Promise Completed!!!");



// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing

let student = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve({
      "status": "learnt es6"
    })
  },3000);

  // setTimeout(() => {
  //   reject({
  //     "status": "i am progressing"
  //   })
  // },2000);


});

student.then((data) => {console.log(data)}).catch((err) => {console.log(err)})



