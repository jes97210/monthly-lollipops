function parseFile(filename){
    d3.csv(filename);
};

let submitFileNameBtn = document.getElementById('submitFileName');
submitFileNameBtn.addEventListener('click', function getFileInput() {
    let filename = document.getElementById("fileInput").value;
    parseFile(filename);
}, false);
