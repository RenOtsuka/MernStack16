const express = require('express')
const app = express() 
const cors = require('cors');

console.log("We are in index.js")

app.use(cors());
app.use('/static', express.static('public')) //localhost:9000/static/alert.js

app.use(express.json({limit:'2mb', extended:false})); 


//catch all route
app.get('*',(req, res)=>{
  res.send('<h2>Catch All Route<h2>')
})


console.log("We are listening at 9000")
app.listen(9000) //localhost:9000