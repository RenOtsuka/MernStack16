const express = require('express');
let fsModule = require("fs");
const app = express();



//7.
const vaccineApiRoute = require("./router/vaccine_router");
const vaccineApi = express();
app.use('/vaccineApi', vaccineApi);
vaccineApi.use('/', vaccineApiRoute)


//5.
app.get('/setVaccine', function (req, res) {

  let vaccineName = req.query["vaccineName"];
  let price = req.query["price"];
  let doses = req.query["doses"];

  let vaccineObj = {
    vaccineName,
    price,
    doses
  }

  let vaccineWS = fsModule.createWriteStream("vaccine.json", "utf-8");
  vaccineWS.write(JSON.stringify(vaccineObj));
  vaccineWS.end();

  res.send(`Query Params: ${vaccineName}, ${price}, ${doses}`);
});


//8.
app.get('/getVaccineByID/:id', function (req, res) {
  let routeParam = req.params["id"];
  res.send(`This is the Id passed: ${routeParam}`);
});




app.listen(9000);