const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/feed", require("./routes/feeds"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
