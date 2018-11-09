const express = require('express');

const router = express();

router.get('/test', (req, res) => {
  res.status(200).json({ a: "Some string value", b: 12 });
});

module.exports = router;
