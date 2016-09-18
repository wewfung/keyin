
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


export function searchForDataSets(searchString, page=1) {
	return new Promise(function(resolve, reject) {
		var url = '/searchfordatasets?page=' + page;
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


export function getInfoFromSearchResult(result){
	
	var versionArray = result.versions;

	if(versionArray.length - 1 < 0)
		return false;

	var obj = {
		id:  result.id,
		version: versionArray[versionArray.length - 1].identifier.substring(3),
		source: result.source.label,
		title: result.data_set_metas[0].title
	};
	return obj;

	
}
