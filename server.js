var http = require('http');

function handleRequest(req, res){

  if(!req.headers.cookie){
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Set-Cookie': createUUID()
    });
    res.end("This is your first time here");
  }
  else{ res.end("you've been here before: " + req.headers.cookie)}
}

var server = http.createServer(handleRequest);

server.listen(process.env.PORT || 8080, function(){
    console.log("Server listening on port" , process.env.PORT || 8080);
});

function createUUID() {
  var h=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  var k=['x','x','x','x','x','x','x','x','-','x','x','x','x','-','4','x','x','x','-','y','x','x','x','-','x','x','x','x','x','x','x','x','x','x','x','x'];
  var u='',i=0,rb=Math.random()*0xffffffff|0;
  while(i++<36) {
    var c=k[i-1],r=rb&0xf,v=c=='x'?r:(r&0x3|0x8);
    u+=(c=='-'||c=='4')?c:h[v];rb=i%8==0?Math.random()*0xffffffff|0:rb>>4
  }
  return u;
}
