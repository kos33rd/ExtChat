var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var proxy = require('express-http-proxy');

app.use('/', proxy('localhost:1841'))


const sendRandomMessage = function() {
  io.emit('chat.send', { for: 'everyone' });
}

setInterval(sendRandomMessage, 3000)


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('App available on http://localhost:3000/');
});
