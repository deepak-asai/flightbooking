const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  console.log("test log");
  await axios
    .get("https://flyfairly.com/api/duffel/airports?query=si")
    // Show response data
    .then((response) => {
      console.log(response.data);
      res.send("hello");
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
