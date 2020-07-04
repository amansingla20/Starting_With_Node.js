var http=require('http');

var date=require('./my_first_nodejs_module');

http.createServer( ( req, res)=> {
res.writeHead(200, {'Content-Type':'text/html'});
res.write('The Date and Time are currently : ' +date.myDate());
res.end();
}).listen(8080);