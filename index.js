var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
	if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) throw err;
            console.log('Connected');
            response.write(data);
            response.end();
        });

   }else if (request.method === 'GET' && request.url === '/pytanie') {
        fs.readFile('./pytanie.txt', 'utf-8', function (err, data) {
            if (err) throw err;
            console.log('Connected');
            response.write(data);
            response.end();
        });



    } else {

        response.statusCode = 404;
        fs.readFile('./404.jpg', 'utf-8', function (err, data) {
            if (err) throw err;
            console.log('Wrong path');
            response.write(data);
            response.end();
        });
    }
});

server.listen(8080);

