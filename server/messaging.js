const messages = []


const buildMessagingServer = function (io) {
  io.on('connection', function (socket) {
    socket.on('Messages.add', function (req, res) {

      console.log(req.data.name); // Romania

      res({
        type: req.type,
        tid: req.tid,
        action: req.action,
        method: req.method,
        data: [
          {
            success: true
          }
        ]
      });
    });

    socket.on('Messages.read', function (req, res) {

      console.log(req.data.page); // 1

      res({
        type: req.type,
        tid: req.tid,
        action: req.action,
        method: req.method,
        data: [
          {sender: 'Jean Luc', timestamp: "2018-07-04T21:00:00", message: "555-111-1111", own: false},
          {sender: 'Worf', timestamp: "2018-07-04T21:00:02", message: "555-222-2222", own: true},
          {sender: 'Deanna', timestamp: "2018-07-04T21:00:05", message: "555-333-3333", own: false},
          {sender: 'Data', timestamp: "2018-07-04T22:30:00", message: "LEL KEK", own: false}
        ]
      });
    });
  });

  const sendRandomMessage = function () {
    io.emit('Messages.send', {for: 'everyone'});
  }

  setInterval(sendRandomMessage, 3000)


}


module.exports = buildMessagingServer
