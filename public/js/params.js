import {makeGraph} from './graphs.js';

var parameterList = ['X', 'Y', 'Value'];  // Determines # of selects made

function addParameter(nameParam, elementParent, attributeList){
	elementParent.append($('<label>' + nameParam + '</label>'));

	var select = $('<select id="htn' + nameParam + '"></select>');
	select.on('change', function() {onParamChange(nameParam, this.value);})
	select.append("<option></option>");
	elementParent.append(select);

	$.each(attributeList, function(index, value){
		select.append($("<option></option>")
			.attr("value", value)
			.text(value)
			.on('change', function() {onParamChange(value);}))
	});

}

export function updateParams(attributeList){
	var divParam = $('.parameters');
	divParam.empty();
	divParam.css({opacity: "1"});
	divParam.append($('<h3 class="param-title"> Parameters </h3>'));
	for (var param in parameterList){
		addParameter(parameterList[param], divParam, attributeList);
	}
}

function onParamChange(param, value){
	console.log(param);
	console.log(value);
	makeGraph();
}
