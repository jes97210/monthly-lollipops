function parseFile(filename){
    d3.csv(filename, function (data) {
        return data;
    }).then( function (data) {
    // do something with data
        console.log(data);
    });
}

let submitFileNameBtn = document.getElementById('submitFileName');
submitFileNameBtn.addEventListener('click', function getFileInput() {
    let filename = document.getElementById("fileInput").value;
    parseFile(filename);
}, false);
