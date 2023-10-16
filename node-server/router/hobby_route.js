let express = require("express");
let router = express.Router({}),
  HobbyDataModel = require("../data-model/hobbyDataModel");

//product api's
router.post('/api/savehobby', (req, res) => {
  console.log("hobby data ", req.body);

  let hobbyDataObject = new HobbyDataModel(req.body);

  hobbyDataObject.save()
    .then((newHobbyData) => {
      res.send(newHobbyData);
    })
    .catch((err) => {
      console.log("err ", err)
      res.send("Error in hobby saving");
    })
})

router.get('/api/gethobbies', (req, res) => {
  HobbyDataModel.find()
    .then((hobbies) => { //error first callback
      res.send(hobbies);
    })
    .catch((err) => {
      console.log(err)
      res.send("Error in getting hobbies");
    })
})


module.exports = router;