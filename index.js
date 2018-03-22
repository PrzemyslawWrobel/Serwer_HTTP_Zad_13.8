var http = require('http');
var fs = require('fs');
var server = http.createServer();

function read(path) {
    fs.readFile(path, 'utf-8', function (err, data) {
            if (err) throw err;
            console.log('Connected');
            response.write(data);
            response.end();
        });
}
server.on('request', function (request, response) {
	if (request.method === 'GET' && request.url === '/') {
        read('./index.html');
                /*fs.readFile('./index.html', function (err, data) {
                    if (err) throw err;
                    console.log('Connected');
                    response.write(data);
                    response.end();
                });*/

   }else if (request.method === 'GET' && request.url === '/pytanie') {
        read('./pytanie.txt');

                /*fs.readFile('./pytanie.txt', 'utf-8', function (err, data) {
                    if (err) throw err;
                    console.log('Connected');
                    response.write(data);
                    response.end();
                });*/



    } else {
        response.statusCode = 404;
        read('./404.jpg');
                /*fs.readFile('./404.jpg', 'utf-8', function (err, data) {
                    if (err) throw err;
                    console.log('Wrong path');
                    response.write(data);
                    response.end();
                });*/
    }
});

server.listen(8080);

