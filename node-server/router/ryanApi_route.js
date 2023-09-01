const express = require('express');

const router = express.Router({caseSensitive:true});

router.get('/hello1',(req, res) => {
  res.send(`<h1>Hello this is Ryan</h1>`);
});

module.exports = router;