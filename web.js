var express = require('express');
var app = express();
var buffer = new Buffer(16);
app.use(express.logger());

var input = fs.readFileSync("index.html", "utf-8");
console.log(buffer.toString('utf-8',0,buffer.length(input));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
