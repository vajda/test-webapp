const express = require('express');
const config = require('config');

const router = express();

router.get('/test', (req, res) => {
  const vals = config.get("root.vals");
  res.status(200).json({
    a: vals.prefixA + " AAAA " +vals.sufixA,
    b: vals.prefixB + " BBBB " + vals.sufixB
  });
});

module.exports = router;
