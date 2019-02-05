var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;

jsonFile = fs.readFileSync(__dirname + '/data.json', 'utf-8');
jsonData = JSON.parse(jsonFile);

app.get("/api/:pincode", function(req,res){
	var pincode = req.params.pincode;
	res.send(jsonData[pincode]);
});
app.get("*", function(req,res){
	res.send("<h1>Find details about pincode.</h1><br>Syntax: /api/pincode")
})
app.listen(port, function(){
	console.log("Server listening on port" + port);
});