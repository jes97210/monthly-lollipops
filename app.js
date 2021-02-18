d3.csv('test.csv', function (data) {
    return data
}).then( function (data) {
// do something with data
    console.log(data)
});
