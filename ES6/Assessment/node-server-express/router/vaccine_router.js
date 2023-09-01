const express = require('express');

const router = express.Router();

router.get('/method',(req, res) => {
  res.send(`<h1>This is the vaccine api</h1>`);
});

module.exports = router;