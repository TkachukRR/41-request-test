const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  res.json({ index: req.query.index });
});

module.exports = router;
