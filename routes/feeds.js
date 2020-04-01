const express = require("express");
const router = express.Router();

router.get("/:genre", (req, res) => {
  console.log(req.params);
  let path = `../models/${req.params.genre}.json`;
  let files = require(path);
  console.log(files[0]);
  res.json({
    data: files[0]
  });
});

module.exports = router;
