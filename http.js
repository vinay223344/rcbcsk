var http = require('http'); 
var server = http.createServer(function (req, res) { 
 if (req.url == '/') 
 { 
res.write('<html><body><h1>Home page</h1></body></html>'); 
} 
if (req.url == "/student") 
 { 
res.write('<html><body><p>Student Page.</p></body></html>'); 
 } 
 if (req.url == "/admin") 
 { 
res.write('<html><body><p>Admin</p></body></html>'); 
 } 
 });
server.listen(5000); 
console.log('Node.js web server at port 5000 is running..') 