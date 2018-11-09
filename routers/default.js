const express = require('express');
const config = require('config');

const router = express();

router.get('/test', (req, res) => {
  const vals = config.get("root.vals");
  res.status(200).json({
    a: vals.prefixA + " A " +vals.sufixA,
    b: vals.prefixB + " B " + vals.sufixB
  });
});

module.exports = router;
