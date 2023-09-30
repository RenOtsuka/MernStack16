const express = require('express');
const app = express();
const cors = require('cors');

const productRoute = require("./router/product_route")
const productApp = express();

app.use(cors());

app.use(express.json({limit:'2mb', extended:false})); 

app.use('/static', express.static('public')); 

app.use('/product',productRoute); //goes to product route from main
productApp.use('/', productRoute);


//catch all route
app.get('*',(req, res)=>{
  res.send('<h2>Catch All Route<h2>')
})


//listens to port 9000
console.log("Listening at 9000")
app.listen(9000);