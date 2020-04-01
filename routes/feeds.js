const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:genre", (req, res) => {
  console.log(req.params);
  let path = `../models/${req.params.genre}.json`;
  let files = require(path);
  console.log(files[0]);
  res.json({
    data: files[0]
  });
});

router.post("/:genre", (req, res) => {
  console.log(req.body);
  let path = `../models/${req.params.genre}.json`;
  let files = require(path);
  let feed = files[0].feed;
  let newFeedItem = req.body;
  feed.push(newFeedItem);
  console.log(feed);

  let JSON_File = `${__dirname}/../models/${req.params.genre}.json`;
  let fullFile = [
    {
      genre: req.params.genre,
      feed: feed
    }
  ];
  fs.writeFileSync(JSON_File, JSON.stringify(fullFile));
  console.log(JSON_File);
  res.json({
    message: "success"
  });
});

module.exports = router;
