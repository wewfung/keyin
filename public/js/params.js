var parameterList = ['X', 'Y', 'Value'];  // Determines # of selects made

function addParameter(nameParam, elementParent, attributeList){
	elementParent.append($('<h3>' + nameParam + '</h3>'));

	var select = $('<select></select>');
	elementParent.append(select);

	$.each(attributeList, function(index, value){
	select.append($("<option></option>")
		.attr("value", value)
		.text(value));
	});
}

export function updateParams(attributeList){
	var divParam = $('.parameters');
	divParam.empty();
	divParam.append($('<h2> Parameters </h2>'));
	for (var param in parameterList){
		addParameter(parameterList[param], divParam, attributeList);
	}
}
