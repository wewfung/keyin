'use strict';

var fs = require('fs');
var express = require('express');
var http = require('http').Server(app);
var app = express();
var bodyParser = require('body-parser');
var getopendata = require('./server/getopendata.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("Listening on port 3000");
});


/*returns an array of json objects containing the columns of the dataset*/
app.get('/getdataset/:id', function(request, response) {
	getopendata.getDataSet(request.params.id, request.query.version)
	.then(data => response.json(data))
	.catch(err => {
		response.json(err);
	});
});

/*returns an array of json data sets (max size 10, the namara api doesnt seem to allow any larger per page)
  that match the query string*/
app.post('/searchfordatasets', function(request, response) {
	getopendata.searchForDataSets('toronto ' + request.body.query, request.query.page)
	.then(data => response.json(data))
	.catch(err => response.json(err));
});
