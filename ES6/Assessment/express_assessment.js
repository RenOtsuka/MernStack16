// Assessment 30th August

//1. create a basic setup with npm cli, write the steps to do so, using express

/*
1. create dir to hold packages, api, etc.
2. go to that directory and run 'npm init' in terminal
3. answer the prompts as necessary
4. in the same directory, run 'npm i express' to install express 
5. create a file to run your api (configure file: i.e listen to a port)
6. to run api run 'npm start'
*/


//2. Create an API named getInfo with server.js as main file and configure using nodemon

//see server.js
//Note: I installed nodemon using 'npm i nodemon'



//3. Explain the purpose of express elements - Application, Request, Response and Router

// Application - this is where the actual express application takes place. This has various methods routing http requests, configure middleware, render html views, etc.
// Request - this represents http request made by the client to a server and has request properties like query string, params, body, etc.
// Response - represents the http response the express app sends when it gets a request. An example of a response format express use is JSON
// Router - a type of middleware and can perform routing functions like navigating from one page to another using the URL



//4. What will happen if we don't have package.lock.json in our application

// we won't be able to access our dependencies that we downloaded/installed in our application



//5. Create an api name getVaccine with get method, pass info like - vaccineName, price, doses
// pass these information using query string and save it into a json file on server also send back the same as response  

//see server.js



//6. What is the purpose of RESTFul API and what specifications are must to make a service RESTFul

// Purpose is to: provide a general interface, scalability of component interfaces, reduce latency and encapsulate legacy systems. 
//Specifications that makes a sercice RESTful are: is stateless (don't remember from previous pages), uses definitive verbs (get/post/delete/put) and uses http


/* Another Answer:

The purpose of a RESTful API is to provide a standardized way for different software components, systems, or applications to communicate over the internet using the principles of Representational State Transfer (REST).

Specifications to Make a Service RESTful:
To make a service RESTful, we must use these specifications:

Client-Server Architecture: Separate the client (user interface) and server (data storage and processing) components, allowing them to evolve independently.

Statelessness: Each client request must contain all the information needed for the server to understand and fulfill the request.

Cacheability: Responses can be cached to improve performance and reduce server load. Clients and intermediaries can cache responses and use them for subsequent requests.

Uniform Interface:
Resource Identification: Resources (data) are identified using URIs (Uniform Resource Identifiers).
Resource Manipulation: Use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources.
Self-Descriptive Messages: Responses should include enough metadata (headers) for clients to understand how to process the data.
/ypermedia as the Engine of Application State (HATEOAS): Responses include hyperlinks that guide clients to available actions or related resources.
Layered System: Components (servers, proxies, gateways, etc.) can be added between clients and servers to provide security, load balancing, caching, etc., without impacting the overall system behavior.
  
*/

//7. Create an example of Application mounting using vaccination API's

//see server.js


//8. Create an API to demonstrate route param usage like - getVaccineByID 

//see server.js