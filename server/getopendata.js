var http = require('http');

var API_KEY = '1080c0975afedcb255a2d6425d4fd354f70bd46aca283e9906bd5d871b1dc17e'

exports.getDataSet = function(id) {
	return new Promise(function(resolve, reject){
	    let url = 'http://api.namara.io/v0/data_sets/' + id + '/data/en-1' + '?api_key=' + API_KEY;
		http.get(url, response => {
			let dataStr = "";
			response.on('data', data => dataStr += data);
			response.on('end', () => resolve(dataStr));
		})
		.on('error', err => reject(new Error("Error on data fetch")));

	});
}


exports.searchForDataSets = function(query) {
	return new Promise(function(resolve, reject) {
		let url = 'http://api.namara.io/v0/data_sets?' +
			(query === '' ? '' : 'search[query]=' + query) +
			'&search[page]=1&search[order]=relevance&search[limit]=10';
		http.get(url, response => {
			let dataStr = "";
			response.on('data', data => dataStr += data);
			response.on('end', () => resolve(JSON.parse(dataStr)['data_sets']));
		}).on('error', err => reject(new Error("Error on dataset search")));
	});
}
