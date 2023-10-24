let express = require("express");
let router = express.Router({}),
  RecentOrdersDataModel = require("../data-model/recentordersDataModel");

//product api's
router.post('/api/saveorder', (req, res) => {
  // console.log("product data ", req.body);

  let recentOrderDataObject = new RecentOrdersDataModel(req.body);

  recentOrderDataObject.save()
    .then((neworderData) => {
      res.send(neworderData);
    })
    .catch((err) => {
      console.log("err ", err)
      res.send("Error in order saving");
    })
})

router.get('/api/getorders', (req, res) => {
  RecentOrdersDataModel.find()
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      console.log(err)
      res.send("Error in getting orders");
    })
})


module.exports = router;


