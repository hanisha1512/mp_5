var net = require('net');
var clients = 0;
function checkarmstorng(number) {
    let sum=0;
    const numberOfDigits = number.length;
    let temp = number;
    while (temp > 0) {
        let r = temp % 10;
        sum = sum + (r ** numberOfDigits);
        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        return number + ' is the Armstrong number.'
    }
    else {
        return number + ' is not the Armstrong number.'
    }
}
var server = net.createServer(function(client) {
    console.log('Client Connected');
    client.on('end', function() {
        console.log('Client disconnected:');
    })
    client.on('data', function(data) {
        client.write(checkarmstorng(data.toString()));
    })
});
server.listen(8000, function() {
    console.log('Server Started on port 8000');
})