Ext.define('ExtChat.socketio.Provider', {
  singleton: true,
  init: function(){
    this.socketProvider = Ext.direct.Manager.addProvider({
      id: 'messagingProvider',
      type: 'socketio',
      namespace: 'Messaging',
      url: 'http://localhost:3000',
      opts: {
        reconnection: false,
        multiplex: false
      },
      actions: {
        Messages: [
          {
            name: 'read',
            params: ['page', 'start', 'limit']
          },
          {
            name: 'add',
            params: ['sender', 'timestamp', 'message'],
            strict: false
          },
          {
            name: 'edit'
          },
          {
            name: 'delete'
          }
        ]
      }
    });


    var socket = this.socketProvider.getSocket();
    socket.on('Messages.receive', this.onMessageReceive);
  },

  onMessageReceive: function(messageData) {
    const store = Ext.getStore('ExtChat.store.Messages')
    const messageModel = store.getModel();
    const message = Ext.create(messageModel, messageData);
    store.add(message);
    // debugger
  }
})
