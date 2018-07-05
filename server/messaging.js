// Initial stub data
const uuid = require('uuid/v4');

const messages = [
  {sender: 'Jean Luc', timestamp: "2018-07-04T21:00:00", message: "555-111-1111"},
  {sender: 'Worf', timestamp: "2018-07-04T21:00:02", message: "555-222-2222"},
  {sender: 'Deanna', timestamp: "2018-07-04T21:00:05", message: "555-333-3333"},
  {sender: 'Data', timestamp: "2018-07-04T22:30:00", message: "LEL KEK"}
]


const buildMessagingServer = function (io) {
  io.on('connection', function (socket) {
    socket.on('Messages.add', function (req, res) {

      console.log('[EVT] Messages.add', req.data);

      const message = {
        id: uuid(),
        sender: req.data.sender,
        message: req.data.message,
        timestamp: new Date()
      }
      messages.push(message);
      socket.broadcast.emit('Messages.receive', message)

      res({
        type: req.type,
        tid: req.tid,
        action: req.action,
        method: req.method,
        data: [
          {
            success: true,
            data: message
          }
        ]
      });
    });

    socket.on('Messages.read', function (req, res) {

      console.log('[EVT] Messages.read', req.data);

      res({
        type: req.type,
        tid: req.tid,
        action: req.action,
        method: req.method,
        data: messages
      });
    });
  });

  const sendRandomMessage = function () {
    io.emit('Messages.receive', {sender: '--==/ Annoying Bot \\==--', timestamp: new Date(), message: "I'm still here!", id: uuid()});
  }

  setInterval(sendRandomMessage, 15000)


}


module.exports = buildMessagingServer
