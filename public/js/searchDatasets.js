import {searchForDataSets, getInfoFromSearchResult, getDataSetById} from "./getdatasets.js";
import {updateParams} from "./params.js";

var headerBig = true;

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

$("#key-svg").click(function() {
	animateHeader(!headerBig);
});

function animateHeader(show){
	if (show) {
		headerBig = true;
		$("header").children().show('440');
		$("#key-svg").css({transform: "translateX(calc(50vw - 27px)) translateY(40px) rotate(0deg) scale(1)"});
	} else {
		headerBig = false;
		$("header").children().hide('440');
		$("#key-svg").css({transform: "translateX(34px) translateY(-27px) rotate(-90deg) scale(0.55)"});
	}
}

function populateTitle(title, show)	{
	if (show) {
		$("#dataset-title").text(() => title);
		$(".dataset-title").css({transform: "translateY(0px)"});
	} else {
		$(".dataset-title").css({transform: "translateY(-100px)"});
	}
}


function onResultClick(element){
	var list = $('.listSection');

	list.hide(function(){ this.remove(); });

	animateHeader(false);

	populateTitle($(element).attr("data-title"), true)

	getDataSetById($(element).attr("data-id"), $(element).attr("data-version"))
	.then((dataset)=>{
		window.globalDataSet = JSON.parse(dataset);
		updateParams(getAttributeList(dataset));
	});

}
function populateSearchResults(results) {
	var ul = $('#search-list');
   	ul.empty();
   	for(var resultInd in results){
   		var resultInfo = getInfoFromSearchResult(results[resultInd]);

   		if(resultInfo === false)
   			continue;

   		var li = $('<li class="search-item twelve columns " data-id=' + resultInfo.id +
   			' data-version=' + resultInfo.version +
   			' data-title="' + resultInfo.title +
			'"><p class="source">' + resultInfo.source +
   			'</p><h4 class="search-item-name">' + resultInfo.title + '</h4></li>');
   		li.css('-webkit-animation-delay', (resultInd/30 + "s"));
   		li.click(function() {onResultClick(this);});
   		ul.append(li);
   	}
}

export function searchButtonClicked() {
    var strSearch = $("#searchString").val();
	$("#searchButton").attr({'data-page': 1, 'data-string': strSearch});

    searchForDataSets(strSearch)
    .then((results)=>{
		populateSearchResults(results);
		$("#nextButton").attr('hidden', false);
		$("#previousButton").attr('hidden', false);
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
		populateSearchResults(results);
    });
}
