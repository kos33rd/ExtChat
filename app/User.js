Ext.define('ExtChat.User', {
  require: [
    'Ext.Msg'
  ],
  singleton: true,
  name: 'Worf',

  init: function () {
    this.name = prompt('Please enter your name:');
  }
});
