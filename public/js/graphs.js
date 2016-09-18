export function makeGraph() {

		var keyX = $('#htnX').val();
		var keyY = $('#htnY').val();

		var arrX = [];
		var arrY = [];
		window.globalDataSet.forEach(obj => {
			arrX.push(obj[keyX]);
			arrY.push(obj[keyY]);
		});

		var colors = arrY.map(() => 'rgba(' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', 0.2)'); 
		var borderColors = arrY.map(() => 'rgba(' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', 1)'); 

		$('#myChart').remove();
		$('.searchSection').append($('<canvas id="myChart" width="80%" height="60%"></canvas>'));
		$('#myLineChart').remove();
		$('.searchSection').append($('<canvas id="myLineChart" width="80%" height="60%"></canvas>'));
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
						//labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
						labels: arrX,
						datasets: [{
								label: keyY,
								//data: [12, 19, 3, 5, 2, 3],
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
						//labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
						labels: arrX,
						datasets: [{
								label: keyY,
								//data: [12, 19, 3, 5, 2, 3],
								data: arrY,
								backgroundColor: colors,
								borderColor: borderColors,
								borderWidth: 1
						}],
						options: {
							responsive: false,
							maintainAspectRatio: false
						}
								
				}
		});
}
