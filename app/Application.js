/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ExtChat.Application', {
  extend: 'Ext.app.Application',

  name: 'ExtChat',

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true
    }
  },

  stores: [
    'ExtChat.store.Messages'
  ],

  requires: [
    'ExtChat.socketio.Provider',
    'ExtChat.User'
  ],


  launch: function () {
    ExtChat.User.init();
    ExtChat.socketio.Provider.init();
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
