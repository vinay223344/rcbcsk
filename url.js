var url=require('url');
var addr='http://localhost:8080/psp.html';
var p=url.parse(addr,true);
console.log(p.protocol);
console.log(p.host);
console.log(p.hostname);
console.log(p.port);
console.log(p.path);

