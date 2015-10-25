var defaultPort = 8081;

var express = require("express");
var app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || defaultPort, function() {

});
