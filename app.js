// Monthly Lollipops JS

function setThreeMonthView(){
  // Set the SVG size for threeMonthView.
  width = 1200;
  height = 500;
  d3.select('#threeMonthView')
    .attr("width", width)
    .attr("height", height);
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