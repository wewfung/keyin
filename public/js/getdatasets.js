
export function  getDataSetById(id, version) {
	return new Promise(function(resolve, reject) {
		var url = '/getdataset/' + id + '?version=' + version;
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onload = function() {
			resolve(JSON.parse(request.response));
		}
		request.onerror = function() {
			reject(new Error("Error retrieving data set"));
		}
		request.send();
	});
}


export function searchForDataSets(searchString) {
	return new Promise(function(resolve, reject) {
		var url = '/searchfordatasets';
		var request = new XMLHttpRequest();
		request.open('POST', url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.onload = function() {
			resolve(JSON.parse(request.response));
		}
		request.onerror = function() {
			reject(new Error("Error retrieving data set"));
		}
		request.send('query=' + searchString);
	});
}

