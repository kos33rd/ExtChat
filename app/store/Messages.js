Ext.define('ExtChat.store.Messages', {
  extend: 'Ext.data.Store',
  alias: 'store.messages',
  model: 'ExtChat.model.Message',
  fields: [
    'sender', 'timestamp', 'message'
  ],
  autoLoad: true,

  proxy: {
    type: 'direct',
    api: {
      read: 'Messaging.Messages.read',
      create: 'Messaging.Messages.add'
    }
  }
});
