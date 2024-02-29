const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  const randomDelay = Math.floor(Math.random() * 1000) + 1;
  setTimeout(() => {
    res.json({ index: req.query.index });
  }, randomDelay);
});

module.exports = router;
