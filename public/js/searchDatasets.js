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

function onResultClick(element){
	getDataSetById($(element).attr("data-id"), $(element).attr("data-version"))
	.then((dataset)=>{
		updateParams(getAttributeList(dataset));
	});
}

export function searchButtonClicked() {
    var strSearch = $("#searchString").val();
	$("#searchButton").attr({'data-page': 1, 'data-string': strSearch});
	$("#nextButton").attr('hidden', false);
	$("#previousButton").attr('hidden', false);

    searchForDataSets(strSearch)
    .then((results)=>{
    	var ul = $('#search-list');
    	ul.empty();
    	for(var resultInd in results){
    		var resultInfo = getInfoFromSearchResult(results[resultInd]);

    		if(resultInfo === false)
    			continue;

    		var li = $('<li class="search-item twelve columns " data-id=' + resultInfo.id +
    			' data-version=' + resultInfo.version +
    			'><p class="source">' + resultInfo.source +
    			'</p><h4 class="search-item-name">' + resultInfo.title + '</h4></li>');
			li.css('-webkit-animation-delay', (resultInd/30 + "s"));
    		li.click(function() {onResultClick(this);});
    		ul.append(li);
    	}
    });
}

$("#searchString").keydown(function(event){
    if(event.keyCode == 13){
        $("#searchButton").click();
    }
});

export function searchOtherPage(pageAmt) {
		console.log('search other page');
	let searchBtn = $("#searchButton");
	let page = searchBtn.attr('data-page');
    searchForDataSets(searchBtn.attr('data-string'), +page + +pageAmt)
    .then((results)=>{
		searchBtn.attr('data-page', +page + +pageAmt)
    	var ul = $('#search-list');
    	ul.empty();
    	for(var resultInd in results){
    		var resultInfo = getInfoFromSearchResult(results[resultInd]);

    		if(resultInfo === false)
    			continue;

    		var li = $('<li class="search-item eleven columns " data-id=' + resultInfo.id +
    			' data-version=' + resultInfo.version +
    			'><h4 class="search-item-name">' +
    			resultInfo.desc + '</h4></li>');
			li.css('-webkit-animation-delay', (resultInd/30 + "s"));
    		li.click(function() {onResultClick(this);});
    		ul.append(li);
    	}
    });
}
