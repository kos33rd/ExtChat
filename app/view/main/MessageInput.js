Ext.define('ExtChat.view.main.MessageInput', {
  extend: 'Ext.form.field.TextArea',
  xtype: 'messageinput',

  grow: true,
  growMin: 25,
  growMax: 120,
  emptyText: 'Написать сообщение...',
  enableKeyEvents: true,

  listeners: {
    keydown: 'onMessageInputKeydown'
  }
});
