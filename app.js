function parseFile(filename){
    d3.csv(filename);
}

d3.select('#submitFileName').on('click', function () {
    let filename = document.getElementById("fileInput").value;
    parseFile(filename);
});