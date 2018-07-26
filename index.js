var express = require('express');
var app = express();
app.use(express.static(__dirname )); //__dir and not _dir
var port = 8080; 
app.listen(port);
console.log('server on' + port);
