var defaultPort = 8081;

var express = require("express");
var app = express();
app.use(express.static('public'));

var port = process.env.PORT || defaultPort;
app.listen(port, function() {
  console.log(`Connected on ${port}`);
});
