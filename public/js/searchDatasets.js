import {searchForDataSets, getInfoFromSearchResult, getDataSetById} from "./getdatasets.js";
import {updateParams} from "./params.js";

function getAttributeList(dataset){
	var listTempAttributes = [];
	dataset = JSON.parse(dataset);
	for (var key in dataset[0]) {
		if (dataset[0].hasOwnProperty(key)) {
			listTempAttributes.push(key);
		}
	}
	return listTempAttributes;
}

/*function onResultClick(){
	$("#s1").text(resultData.desc);

	getDataSetById(resultData.id, resultData.version)
	.then((dataset)=>{

		updateParams(getAttributeList(dataset));

	});
}*/

export function searchButtonClicked() {
    var strSearch = $("#searchString").val();

    searchForDataSets(strSearch)
    .then((results)=>{
    	var ul = $('#search-list');
    	ul.empty();
    	for(var resultInd in results){
    		var resultInfo = getInfoFromSearchResult(results[resultInd]);
    		
    		if(resultInfo === false)
    			continue;

    		ul.append($('<li class="search-item" data-id=' + resultInfo.id + 
    			' data-version=' + resultInfo.version + 
    			'><h4 id="s1" class="search-item-name">' + 
    			resultInfo.desc + '</h4></li>'));
    	}
    });
}

