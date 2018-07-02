var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var proxy = require('express-http-proxy');

app.use('/', proxy('localhost:1841'))

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('App available on http://localhost:3000/');
});
