import {getDataSetById} from "./getdatasets.js";

var datasets = { 'Parking Lots in Toronto':"https://api.namara.io/v0/data_sets/4d4418ca-ce52-465c-8a84-f11260c7da92/data/en-1?api_key=1080c0975afedcb255a2d6425d4fd354f70bd46aca283e9906bd5d871b1dc17e",
 				'Red Light Cameras':"https://api.namara.io/v0/data_sets/7b9d9f3b-2e0a-4907-ac9f-be32bb80e109/data/en-0?api_key=1080c0975afedcb255a2d6425d4fd354f70bd46aca283e9906bd5d871b1dc17e" };

var listParameters = ['X', 'Y', 'Value'];  // Determines # of selects made
var listAttributes = ['a', 'b', 'c'];  // Attributes to display under each parameter select

function addParameter(nameParam, elementParent){
	elementParent.append($('<h3>' + nameParam + '</h3>'));

	var select = $('<select></select>');
	elementParent.append(select);

	$.each(listAttributes, function(index, value){
	select.append($("<option></option>")
		.attr("value", value)
		.text(value));
	});
}

function populateAttributes(dataset){
	var listTempAttributes = [];
	dataset = JSON.parse(dataset);
	for (var key in dataset[0]) {
		if (dataset[0].hasOwnProperty(key)) {
			listTempAttributes.push(key);
		}
	}
	return listTempAttributes;
}

export function setupHtml(){
	var selectDataset = $("#datasetSelect");
	$.each(datasets, function(key, value){
		selectDataset.append($("<option></option>")
			.attr("value", value)
			.text(key));
	});

	for (var dataset in datasets) {

		getDataSetById('7b9d9f3b-2e0a-4907-ac9f-be32bb80e109', 0)
		.then((data)=> {
			listAttributes = populateAttributes(data)
			for (var param in listParameters){
				var divParam = $('.parameters');
				addParameter(listParameters[param], divParam);
			}});
		break;
	}
}
