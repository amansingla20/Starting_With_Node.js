var http=require('http');

http.createServer(function(req, res){
res.writeHead(200,{'Content-Type': 'text/html'});
res.end('Hello World!, I am Aman Singla');
}).listen(8080);