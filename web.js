var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

var input = fs.readFileSync("index.html", "utf-8");

app.get('/', function(request, response){
    response.send(input);
});

var port = processB.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
