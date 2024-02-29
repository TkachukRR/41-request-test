const express = require('express');
const router = express.Router();

const REQUEST_LIMIT = 50;
const REQUEST_INTERVAL_SEC = 1;
const ERROR = { limit: { code: 429, message: 'Too many requests' } };

let requestCounter = 0;
let lastResetTime = Date.now();

router.get('/api', (req, res) => {
  const timeNow = Date.now();
  if (timeNow - lastResetTime >= REQUEST_INTERVAL_SEC * 1000) {
    requestCounter = 0;
    lastResetTime = timeNow;
  }

  requestCounter++;
  if (requestCounter > REQUEST_LIMIT) {
    res.status(ERROR.limit.code).json({ error: ERROR.limit.message });
    return;
  }

  const randomDelay = Math.floor(Math.random() * 1000) + 1;
  const index = req.query.index;
  setTimeout(() => {
    res.json({ index: index });
  }, randomDelay);
});

module.exports = router;
