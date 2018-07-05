Ext.define('ExtChat.model.Message', {

  extend: 'Ext.data.Model',

  fields: [
    {
      name: 'id',
      type: 'string'
    },
    {
      name: 'sender',
      type: 'string'
    },
    {
      name: 'timestamp',
      type: 'date'
    },
    {
      name: 'message',
      type: 'string'
    },
    {
      name: 'own',
      calculate: function (data) {
        return data.sender === 'Worf'
      }
    }
  ],

  proxy: {
    type: 'direct',
    api: {
      read: 'Messaging.Messages.read',
      create: 'Messaging.Messages.add',
      update: 'Messaging.Messages.edit',
      destroy: 'Messaging.Messages.delete'
    }
  }
});
