

export function drawD3Graph(key1, key2, key3) {
    var svg = d3.select("#chartSection").append("svg");
    var g = svg.append("g");

    var width = window.innerWidth;
    var height = window.innerHeight;

    svg.attr("width", width);
    svg.attr("height", height);

    var yCoords = [];
    var xCoords = [];
    var capacities = [];
    var prices = [];

    var data = window.globalDataSet;

    var yScale = d3.scaleLinear()
        .domain([d3.min(data, function(d) { return d[key1]; }), d3.max(data, function(d) { return d[key1]; })]);

    var xScale = d3.scaleLinear()
        .domain([d3.min(data, function(d) { return d[key2]; }), d3.max(data, function(d) { return d[key2]; })]);

    var zScale = d3.scaleLinear()
        .domain([d3.min(data, function(d) { return d[key3]; }), d3.max(data, function(d) { return d[key3]; })]);

    var colorBase = `rgba(${Math.round(d3.randomUniform(10, 255)())},${Math.round(d3.randomUniform(10, 255)())},${Math.round(d3.randomUniform(10, 255)())},`;

    var p = g.selectAll("circle")
        .data(data);

    p.exit().transition().duration(30)
        .style("opacity", "0").remove();

        p.enter().append("circle")
            .merge(p)
            .transition()
            .ease(d3.easeCubicInOut)
            .duration(400)
            .attr("r", d => zScale(d[key3])*200)
            .attr("cy", function(d) {
                return yScale(d[key1])*800;
            })
            .attr("cx", d => xScale(d[key2])*800)
            .style("fill", function(d) {
                console.log(colorBase + "0." + Math.round(d3.randomUniform(1, 5)()) + ")");
                return colorBase + "0." + Math.round(d3.randomUniform(1, 5)()) + ")";
            });
}
