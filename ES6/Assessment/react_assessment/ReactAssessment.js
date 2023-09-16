//Assessment #3 react and its fundamentals - 15/09/2023

//1. what is react and its role for single page application (SPA)

// React is a development framework for single page applications that works browser side and is quite fast at rendering the DOM
// Its role in SPA is that it provides a virtual DOM, which allows the developer to work on it and when the changes are updated in the virtual DOM, 
//react will only update the parts that needs to be updated in the browser


//2. how react is faster compared to other javascript frameworks

//react is faster as it uses a virtual DOM to render the real DOM more quickly, since the real DOM has a hierarchical structure
// where even the smallest of changes needs to re-render the entire page; and the algorithm used takes time to render the entire page over and over

//3. what is virtual dom

//virtual dom is a JS object in memory that represents the DOM 

//4. how react renders dom in conservative manner

//react uses the Diffing Algorithm to compare the virtual DOM with the real DOM
//and if it detects any changes, react will only change that part and reflect it to the real DOM



//5. create a class component named - Success and show some quotes on success in it
//6. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//7. create SuccessStory as another component, pass this as props in SuccessChild from Success component
//8. create UserSignIn component using uncontrolled way, should be class component
//9. create Product component to accept ProductName and ProductPrice
//10. pass a random value from SuccessStory component back to Success

