Ext.define('ExtChat.model.Message', {

  extend: 'Ext.data.Model',

  fields: [
    {
      name: 'sender',
      type: 'string'
    },
    {
      name: 'timestamp',
      type: 'string'
    },
    {
      name: 'message',
      type: 'string'
    }
  ]
});
