//importing file system module in our code so that we can use it for accessing file
let fsModule = require("fs"); //fs - module used to do job/s with file systems

// console.log("file read starts");
// let fileData = fsModule.readFileSync("class.js","utf-8") //blocking task
// console.log(fileData)
// console.log("file read ends");


// console.log("file read starts async");
// fsModule.readFile("class.js","utf-8",(err, data)=>{
//     console.log(data)
//     console.log(err)
// }) //non-blocking task
// console.log("file read ends async");



// //ReadFile using streams 
// let readerStream = fsModule.createReadStream("class.js","utf8");
// let data = "";

// readerStream.on("data",(chunks)=>{
//   console.log("chunks ", chunks);
//   data = data + chunks;
// });

// readerStream.on("end",()=>{
//   console.log("end ", data);
// });

// readerStream.on("error",(erroObj)=>{
//   console.log("error ", erroObj);
// });

// console.log("Read File using reader stream end");




//Writing into a file using write stream
let userDetails = {
    name : "JASON",
    age : 22,
    city : "California ",
    session : "MernStack"
}

//continues update in file, appending one after another
// fsModule.readFile('Text.json','utf8',(err, fileData)=>{

//         console.log("information" + fileData);

//         let writerStream = fsModule.createWriteStream("Text.json","utf8");

//         if (fileData) {   

//             let oldData = JSON.parse(fileData)    
//             console.log(oldData)
//             writerStream.write(JSON.stringify([...oldData, userDetails]));
//             writerStream.end();

//         }else{

//             writerStream.write(JSON.stringify([{ name : "JASON",
//                 age : 22,
//                 city : "California ",
//                 session : "MernStack"
//             }]));

//             writerStream.end();
//         }
// });


//one data and then replace the previous one
// let writerStream = fsModule.createWriteStream("Text.json","utf8");
// writerStream.write(JSON.stringify(userDetails));
// writerStream.end();

// writerStream.on("finish", ()=>{ //attached an event from eventemitter class
//     console.log("Writing into the file is done");

//     fsModule.readFile('Text.json','utf8',(err, fileData)=>{ //error first call back : error will always be a first object when executes with node modules
//         console.log("err", err);
//         console.log(JSON.parse(fileData));
//     });

// });

// writerStream.on("error",(erroObj)=>{
//     console.log(erroObj);
// });
// console.log("Read File Ends Using Writer Stream");


//REPL

//R - Read
//E - Evaluate
//P - Print
//L - Loop

//we need to stop it with ctrl+c cmd+c (sometimes we need to do it twice)


// Assignment:
//save the data in json object that are making MERN stack and MEAN stack as acronym
//write using writestream and also read and print using readstream upon finish
//expand it like - M-Mongo, E-Express, R-React and N-Node in JSON format

let mernAcro = {
  M: "Mongo",
  E: "Express",
  R: "React",
  N: "Node"
}

let meanAcro = {
  M: "Main",
  E: "Export",
  A: "Async",
  N: "New"
}

let mernWS = fsModule.createWriteStream("MernAcro.json", "utf8");
mernWS.write(JSON.stringify(mernAcro));
mernWS.end();
mernWS.on("finish", ()=> {
  fsModule.readFile("MernAcro.json", "utf8", (err, data) =>{
    console.log("err", err);
    console.log(JSON.parse(data));
  });
});

mernWS.on("error", (err) => {
  console.log(err);
})



let meanWS = fsModule.createWriteStream("MeanAcro.json", "utf8");
meanWS.write(JSON.stringify(meanAcro));
meanWS.end();
meanWS.on("finish", ()=> {
  fsModule.readFile("MeanAcro.json", "utf8", (err, data) =>{
    console.log("err", err);
    console.log(JSON.parse(data));
  });
});

meanWS.on("error", (err) => {
  console.log(err);
})

