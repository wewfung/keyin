'use strict';

var fs = require('fs');
var express = require('express');
var http = require('http').Server(app);
var app = express();


app.use(express.static('public'));

app.listen(3000, function() {
    console.log("Farting on port 3000");
});
