var express = require("express");
var fs = require("fs");
var cors = require("cors");
var app = express();
var port = process.env.PORT || 3000;

app.use(cors());

jsonFile = fs.readFileSync(__dirname + "/data.json", "utf-8");
jsonData = JSON.parse(jsonFile);

app.get("/api/:pincode", (req, res) => {
  var pincode = req.params.pincode;
  var result = jsonData[pincode];
  if (result == undefined) {
    res.status(400);
    res.send({
      'error': 'Incorrect pincode'
    });
  } else {
    res.send(jsonData[pincode]);
  }
});
app.get("*", (req, res) => {
  res.send(fs.readFileSync("./templates/home.html", "utf-8"));
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
