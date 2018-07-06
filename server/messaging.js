const uuid = require('uuid/v4');

// Initial stub data
const messages = [
  {sender: 'Homer Simpson', timestamp: "2018-07-04T21:00:00", message: "So, Burns is gonna make us all go on a stupid corporate retreat up in the mountains to learn about teamwork. Which means we'll have to cancel our plans to hang around here."},
  {sender: 'Bart', timestamp: "2018-07-04T21:00:02", message: "Teamwork is overrated."},
  {sender: 'Homer Simpson', timestamp: "2018-07-04T21:00:02", message: "Huh?."},
  {sender: 'Bart', timestamp: "2018-07-04T21:00:05", message: "Think about it. I mean, what team was Babe Ruth on? Who knows."},
  {sender: 'Lisa', timestamp: "2018-07-04T21:00:05", message: "Yankees"},
  {sender: 'Bart', timestamp: "2018-07-04T21:00:05", message: "Sharing is a bunch of bull, too. And helping others. And what's all this crap I've been hearing about tolerance?"},
  {sender: 'Homer Simpson', timestamp: "2018-07-04T22:30:00", message: "Hmm. Your ideas are intriguing to me and I wish to subscribe to your newsletter. But I think we have to go to the retreat anyway."}
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
    const message = {sender: '--==/ Annoying Bot \\==--', timestamp: new Date(), message: "I'm still here!", id: uuid()}
    io.emit('Messages.receive', message);
    messages.push(message);
  }

  setInterval(sendRandomMessage, 30000)


}


module.exports = buildMessagingServer
