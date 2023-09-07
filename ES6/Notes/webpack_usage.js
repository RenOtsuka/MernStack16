//webpack is used for below purposes in react application - 

// webpack as webserver - 
// 1. host app at localhost:9090
// 2. expose the end point at 9090 port


//b. webpack as faster loading of react app on browser (minification)
//i.e 200 KB, 20KB (less amt to load) - 
//1. helps to remove extra spaces
//2. remove commented code
//3. redundant logic/ logic optimization

//ex.

let val = true;

if(val){
  console.log("true")
}
else{
  console.log("false")
}

//after webpack minification/optimization
let val2 = true;val2?console.log("true"):console.log("false");

//c. resolve issues w/ file references
//1. Home.js, About.js, Cart.js => header.js, footer.js, Cart.js => User.js

//d. bundling and hot reloading (nodemon)
//After dependency resolution - bundle all files - .js, .png, etc. => bundle.js

//e. hot reloading(nodemon)
//while in dev, if we have a change in some file so it caches the prev values but reloads the updated values on browser

//f. uses babel config. to do tranpilation
//async/await => ES8 : firefox doesn't have

//babel will read ES6/8 code and convert it in ES5 equivalent or add wrappers for browsers

//JSX - JS like XML code => html+JS 
