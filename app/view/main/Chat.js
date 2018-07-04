Ext.define('ExtChat.view.main.Chat', {
  extend: 'Ext.view.View',
  xtype: 'chat',
  componentCls: 'chat',
  requires: [
    'ExtChat.store.Messages'
  ],

  title: 'Chat',

  store: {
    type: 'messages'
  },

  itemSelector: 'div.message',
  tpl: [
    '<tpl for=".">',
        '<div class="<tpl if="own==true">own</tpl><tpl if="own==false">foreign</tpl> message">',
          '<div class="arrow"></div>',
          '<div class="sender">{sender}</div>',
          '<div class="text">{message}</div>',
        '</div>',
    '</tpl>'
  ],

  listeners: {
    select: 'onItemSelected'
  }
});
