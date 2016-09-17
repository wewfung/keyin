function searchParameterChanged(event) {
    //alert('You like ' + event.target.value + ' ice cream.');
}

var chosenData = 0;

function searchButtonClicked() {
    let searchType = document.getElementById("searchType").value;
    let searchString = document.getElementById("searchString").value;

    if (searchType === "saab" || searchType === "fiat" || searchType == "audi") {
        chosenData = 1;
    }
    else {
        chosenData = 0;
    }

    alert('Searching for ' + searchString + ' under ' + searchType);
}


//'size' used by genData function
var size = 20;
var width = window.innerWidth;
var height = window.innerHeight;

// Select the SVG Element from the DOM & add a group
var svg = d3.select("svg");
var g = svg.append("g");

// Make the SVG the size of the window
svg.attr("width", width);
svg.attr("height", height);

var dataSets = [
    "https://api.namara.io/v0/data_sets/4d4418ca-ce52-465c-8a84-f11260c7da92/data/en-1?api_key=1080c0975afedcb255a2d6425d4fd354f70bd46aca283e9906bd5d871b1dc17e",
    "https://api.namara.io/v0/data_sets/7b9d9f3b-2e0a-4907-ac9f-be32bb80e109/data/en-0?api_key=1080c0975afedcb255a2d6425d4fd354f70bd46aca283e9906bd5d871b1dc17e"
];


function drawData() {
    d3.json(dataSets[chosenData], function(error, data) {
        if (error) throw error;

        console.log(data);

        var yCoords = [];
        var xCoords = [];
        var capacities = [];
        var prices = [];


        for (var i of data) {
            if (i.rate_half_hour != false)
                prices.push(parseFloat(i.rate_half_hour))
        }

        console.log(prices);
        var maxO = d3.max(prices);
        console.log(maxO);

        var yScale = d3.scaleLinear()
            .domain([d3.min(data, function(d) { return d.lat; }), d3.max(data, function(d) { return d.lat; })]);

        var oScale = d3.scaleLinear()
            .range([d3.min(data, function(d) { return parseFloat(d.rate_half_hour); }), d3.max(data, function(d) { return d.rate_half_hour; })])

        var colorBase = `rgba(${_.random(10,255)},${_.random(10,255)},${_.random(10,255)},`;

            var p = g.selectAll("circle")
                .data(data);

            p.exit().transition().duration(30)
                .style("opacity", "0").remove();

            if (chosenData == 0) {
                var xScale = d3.scaleLinear()
                    .domain([d3.min(data, function(d) { return d.lng; }), d3.max(data, function(d) { return d.lng; })]);

                p.enter().append("circle")
                    .merge(p)
                    .transition()
                    .ease(d3.easeCubicInOut)
                    .duration(400)
                    .attr("r", d => d.capacity/20)
                    .attr("cy", function(d) {
                        return yScale(d.lat)*600+20;
                    })
                    .attr("cx", d => xScale(d.lng)*width*0.9)
                    .style("fill", function(d) { // Opacity of Colour = position of rect/data-entry in array of data
                        if (d.rate_half_hour != false && !(isNaN((d.rate_half_hour +0)/maxO))) {
                            console.log((d.rate_half_hour +0)/maxO);
                            return colorBase + (d.rate_half_hour)/maxO + ")";
                        } else {
                            return colorBase + 0.2 + ")";
                        }

                    });
            }

            if (chosenData == 1) {
                var xScale = d3.scaleLinear()
                    .domain([d3.min(data, function(d) { return d.long; }), d3.max(data, function(d) { return d.long; })]);

                p.enter().append("circle")
                    .merge(p)
                    .transition()
                    .ease(d3.easeCubicInOut)
                    .duration(400)
                    .attr("r", d => 10)
                    .attr("cy", function(d) {
                        return yScale(d.lat)*600+20;
                    })
                    .attr("cx", d => xScale(d.long)*width*0.9)
                    .style("fill", function(d) { // Opacity of Colour = position of rect/data-entry in array of data
                        return "rgba(200, 41, 38," + 0.8 + ")";
                    });
            }


        });
    }

