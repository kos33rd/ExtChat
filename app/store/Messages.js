Ext.define('ExtChat.store.Messages', {

  extend: 'Ext.data.Store',
  alias: 'store.messages',
  model: 'ExtChat.model.Message',
  autoLoad: true
});
