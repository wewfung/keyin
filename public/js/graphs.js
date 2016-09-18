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

	if(keyValue === ""){
		var colors = arrY.map(() => 'rgba(' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', 0.2)'); 
		var borderColors = arrY.map(() => 'rgba(' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', 1)'); 

		
		divCharts.append($('<canvas id="myChart" width="600" height="400"></canvas>'));
		divCharts.append($('<canvas id="myLineChart" width="600" height="400"></canvas>'));
		var ctx = document.getElementById("myChart");
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
	} else{


		
	}
}
