const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/api/feed", require("./routes/feeds"));

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
