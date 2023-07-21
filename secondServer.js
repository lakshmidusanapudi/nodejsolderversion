var http=require('http');
var imp=require('./secondModule');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(imp.myMessage());
    c
    res.end();
}).listen(2000);