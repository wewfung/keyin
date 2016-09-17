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

export function searchButtonClicked() {
    var strSearch = $("#searchString").val();

    searchForDataSets(strSearch)
    .then((data)=>{
    	var resultData = getInfoFromSearchResult(data[0]);

    	$("#s1").text(resultData.desc);

    	getDataSetById(resultData.id, resultData.version)
    	.then((data)=>{

    		updateParams(getAttributeList(data));

    	});

    });
}

