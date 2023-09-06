// Fullstack - Service Oreinted Archit.

// Decoupled or loosely coupled
// Part 1 - <Backend> - node server (express, mongodb, cors, etc.)
// Part 2 - <Frontend> - reactapp (webpack, html5, bootstrap, (react)-redux, react-router, etc)

// Monolithic - java(jsp), .net(aspx) => front + back


// fs, os, http, etc - build in mod. of node framework (99000+ packages, cookies)
// npmjs.com - to host packages/mod built in node

// webserver
// 1. To host service - webserver
// 2. ne able to expose http methods (get, put, post, delete...)
// 3. be able to handle data types - data-types
// 4. be able to handle caching - cookie-parser
// 5. be able to handle authen. - oauth
// 6. be able to handle file types - JSON.parse
// 7. authorization/cross origin - cors

// express - one common package to do all the job a webserver should do using node packages

//we can use nodejs cli(command line interface) - nom or yarn, to download & install these packages from npmjs.com
// check version - npm -v

// we need to keep or build a file/meta-data which has info. about our packages that are installed (package.json)

// we need to initialize the npm in our repository
// 1. go to dir
// 2. npm init (to init the package w/ npmj.com)
// 3. add info to package.json

// once package is created, we can use install external package w/ below steps
// install - npm i <package name>  - npm i express
// uninstall - npm uninstall <package name>

// keeping for dev. env. only
// install - npm i <package name> -D

// package-lock.json keeps the meta-data about your packages(don't touch it)

//if you want npm to ignore certain packages
// 1. create .gitignore
// 2. include path (i.e /node-server/node_modules)

//instal dev cookies
// npm -i cookie -D

// pull from git
// npm i / npm install

// to run api
// npm start

//to make build to be run
// npm run build (minimized)