const http = require('http');


http.createServer((req,resp)=>{
    resp.write('<h1>My name Rajesh</h1>');
    resp.end();
}).listen(4000);
