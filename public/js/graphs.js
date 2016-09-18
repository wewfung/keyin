import {drawD3Graph} from "./graphd3.js"

export function makeGraph() {

	var keyX = $('#htnX').val();
	var keyY = $('#htnY').val();
	var keyValue = $('#htnValue').val();

	var arrX = [];
	var arrY = [];
	var arrValue = [];
	window.globalDataSet.forEach(obj => {
		arrX.push(obj[keyX]);
		arrY.push(obj[keyY]);
		arrValue.push(obj[keyValue]);
	});

	var divCharts = $('#chartSection');
	divCharts.empty();
	var colors = arrY.map(() => 'rgba(' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', 0.2)');
	var borderColors = arrY.map(() => 'rgba(' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', 1)');


	if(keyValue === ""){

		divCharts.append($('<canvas id="myChart" width="1000" height="500"></canvas>'));
		divCharts.append($('<canvas id="myLineChart" width="1000" height="500"></canvas>'));
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: arrX,
				datasets: [{
					label: keyY,
					data: arrY,
					backgroundColor: colors,
					borderColor: borderColors,
					borderWidth: 1
				}]
			},
			options: {
				responsive: false,
				maintainAspectRatio: false
			}
		});

		var ctlx = document.getElementById("myLineChart");
		var myLineChart = new Chart(ctlx, {
			type: 'line',
			data: {
				labels: arrX,
				datasets: [{
					label: keyY,
					data: arrY,
					backgroundColor: colors[0],
					borderColor: borderColors[0],
					borderWidth: 1
				}]
			},
			options: {
				responsive: false,
				maintainAspectRatio: false,
			}
		});



		divCharts.append($('<canvas id="myRadarChart" width="600" height="400"></canvas>'));
		var ctrx = document.getElementById("myRadarChart");
		var myRadarChart = new Chart(ctrx, {
			type: 'radar',
			data: {
				labels: arrValue, //empty values
				datasets: [{
					label: keyY,
					data: arrY,
					backgroundColor: colors.length > 0 ? colors[1] : colors,
					borderColor: borderColors.length > 0 ? borderColors[1] : borderColors,
					borderWidth: 1
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				tooltips: {enabled: false}
			}
		});

	} else{

		drawD3Graph(keyX, keyY, keyValue);

	}
}
