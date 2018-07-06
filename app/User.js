Ext.define('ExtChat.User', {
  singleton: true,
  name: 'Worf',

  init: function () {
    this.name = prompt('Please enter your name:');
  }
});
