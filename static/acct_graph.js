var url = "http://api.reimaginebanking.com/customers/577d35300733d0184021f543/accounts?key=fdcdbc9f4d339cd5970c2d87c8e8d16f";

$.getJSON(url).done( function(d) {

var fill = d3.scale.category20c();
var total = 0;


for (var f in d){
  total = total + d[f].balance;
} 

console.log(total);
d3.layout.cloud().size([500, 500])
      .words(d.map(function(d) {
        return {text: d.type, size: 90*(d.balance/total)};
      }))
      .padding(0)
      .rotate(function() { return 0; })
      .font("Impact")
      .fontSize(function(d) { return d.size; })
      .on("end", draw)
      .start();

  function draw(words) {
      d3.select("body").append("svg")
        .attr("width", 500)
        .attr("height", 500)
      .append("g")
        .attr("transform", "translate(150,150)")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {

          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
  }
  /*function drawUpdate(words){
   d3.layout.cloud().size([500, 500])
      .words(words)
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return d.size/50000; })
      .start();


      d3.select("svg")
      .selectAll("g")
        .attr("transform", "translate(150,150)")
      .selectAll("text")
        .data(words).enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })

        .attr("transform", function(d) {

          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });



  }
*/
});

/*
 var url = "http://api.reimaginebanking.com/customers/577d35300733d0184021f543/accounts?key=fdcdbc9f4d339cd5970c2d87c8e8d16f"


 var r = 300,
      format = d3.format(",d");
  
  var bubble = d3.layout.pack()
      .sort(null)
      .size([r, r]);
  
  var vis = d3.select("body").append("svg:svg")
     .attr("width", r)
     .attr("height", r)
     .attr("class", "bubble")
     .attr("transform", "translate(150,150)");

  var fill = d3.scale.category20c();

  $.getJSON(url).done( function(d) { 
  var total = 0;
  for (var f in d){
    console.log(d[f].balance/200);
    total = total + d[f].balance
  } 
  console.log(total);
   var node = vis.selectAll("g.node")
       .data(d)
       //.filter(function(d) { return !d.children; }))
     .enter().append("svg:g")
       .attr("class", "node")
       .attr("transform", function(d) { return "translate(" + Math.random()*150 + "," + Math.random()*150 + ")"; });
 
   node.append("svg:circle")
       .attr("r", function(d) { return 100*(d.balance/total);})
       .style("fill", function(d, i) { return fill(i); });
 

   node.append("svg:text")
       .attr("text-anchor", "middle")
       .attr("dy", ".3em")
       .text(function(d) { return d.type; })
  
});
*/
/*
   var margin = {top: 20, right: 20, bottom: 90, left: 90},
      width = 600 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;


  // set the ranges
  var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

  var y = d3.scale.linear().range([height, 0]);

  // define the axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")


  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);


  // add the SVG element
  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")"); 

 var url = "http://api.reimaginebanking.com/customers/577d35300733d0184021f543/accounts?key=fdcdbc9f4d339cd5970c2d87c8e8d16f"

 $.getJSON(url).done( function(d) { 
    // set the dimensions of the canvas

      d.forEach(function(d) {
          d.type = d.type;
          d.balance = +d.balance;
      });
    
    // scale the range of the data
    x.domain(d.map(function(d) { return d.type; }));
    y.domain([0, d3.max(d, function(d) { return d.balance; })]);

    // add axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 5)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");


    // Add bar chart
    svg.selectAll("bar")
        .data(d)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.type); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.balance); })
        .attr("height", function(d) { return height - y(d.balance); });

});

 */
