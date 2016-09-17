'use strict';

var http = require('http');

var API_KEY = 'c48724acc971849ee57d4bb05f9650bf2da12873c3618aba972d430e0f86f2b2'

exports.getDataSet = function(id, version) {
	return new Promise(function(resolve, reject){
	    let url = 'http://api.namara.io/v0/data_sets/' + id + '/data/en-' + version +  '?api_key=' + API_KEY;
		http.get(url, response => {
			let dataStr = "";
			response.on('data', data => dataStr += data);
			response.on('end', () => resolve(dataStr));
		})
		.on('error', err => reject(new Error("Error on data fetch")));

	});
}


exports.searchForDataSets = function(query, page) {
	page = page || 1;
	return new Promise(function(resolve, reject) {
		let url = 'http://api.namara.io/v0/data_sets?' +
			(query ? 'search[query]=' + query + '&' : '') +
			'search[page]=' + page + '&search[order]=relevance&search[limit]=10';
		http.get(url, response => {
			let dataStr = "";
			response.on('data', data => dataStr += data);
			response.on('end', () => resolve(JSON.parse(dataStr)['data_sets']));
		}).on('error', err => reject(new Error("Error on dataset search")));
	});
}
