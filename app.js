// Monthly Lollipops JS

function getThreeMonthDomain(middleDate){
  // Calculate a 3 month date range, based on the given middle Date.
  let previousMonthDate = d3.timeMonth.offset(middleDate, -1);
  let nextMonthDate = d3.timeMonth.offset(middleDate, 1);
  return [
    d3.timeMonth.floor(previousMonthDate),
    d3.timeMonth.ceil(nextMonthDate)]
}

function setThreeMonthView(){
  // Set the SVG size for threeMonthView.
  let width = 1200;
  let height = 500;
  d3.select('#threeMonthView')
    .attr("width", width)
    .attr("height", height)
        
  // Set the graphing space for threeMonthView.
  let margins = {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30}
  let widthGraphing = width - margins.left - margins.right;
  let heightGraphing = height - margins.top - margins.bottom;
  
  // Set the x-axis.
  let xScale = d3.scaleTime()
    .domain(getThreeMonthDomain(new Date(Date.now())))
    .range([0, widthGraphing]);
  // Add the grid lines for days.
  let xAxisGridGenerator = d3.axisBottom(xScale)
    .ticks(d3.timeDay.every(1))
    .tickFormat("")
    .tickSize(-heightGraphing);
  d3.select('#threeMonthView')
    .append('g')
    .attr("class", "xAxisGrid")
    .attr("transform",
      `translate(${margins.left},${height - margins.bottom})`)
    .call(xAxisGridGenerator);
  // Add the ticks and labels for months.
  let xAxisGenerator = d3.axisBottom(xScale)
    .ticks(d3.timeMonth.every(1))
    .tickFormat(d3.timeFormat("%B (%Y)"))
    .tickSize(-heightGraphing);
  d3.select('#threeMonthView')
    .append('g')
    .attr("id", "xAxis")
    .attr("transform",
      `translate(${margins.left},${height - margins.bottom})`)
    .call(xAxisGenerator);
  // Move the month labels to the center of their span.
  // 16% means the label moves around 1/6th to the right.
  d3.selectAll('#xAxis g text')
    .attr("dx", '16%');
}

function showData(){
  // Show the data after loading. Draws everything.
  setThreeMonthView();
}

showData();

function parseFile(filename){
    d3.csv(filename);
}

d3.select('#submitFileName').on('click', function () {
    let filename = document.getElementById("fileInput").value;
    parseFile(filename);
});