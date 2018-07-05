Ext.define('ExtChat.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onItemSelected: function (sender, record) {
    console.log('Selected record: ', record)
  },

  onMessageInputKeydown: function (fld, evt) {
    if (!evt.shiftKey && evt.getKey() === evt.ENTER) {
      const messageText = fld.value
      if (messageText) {
        const message = Ext.create('ExtChat.model.Message', {
          sender: 'Worf',
          message: messageText.replace("\n", "\\n")
        })
        const messagesStore = Ext.getStore('ExtChat.store.Messages')
        messagesStore.add(message)
        fld.setValue('')
        evt.preventDefault()
      }
    }
  },

  onMessageAdd: function(record, index, node, view){
    const chat = this.getView().down('chat');
    const chatBody = chat.el.dom;
    chatBody.scrollTop = chatBody.scrollHeight - chatBody.clientHeight;
  }
});
