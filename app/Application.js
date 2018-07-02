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
        // TODO: add global / shared stores here
    ],

    launch: function () {
      Ext.direct.Manager.addProvider({
        id          : 'providerid',
        type        : 'socketio',
        namespace   : 'Socket',
        url         : 'localhost:3000',
        opts        : {
          reconnection: false,
          multiplex   : false
        },
        actions     : {
          Location: [
            {
              name: 'read',
              params: ['page', 'start', 'limit']
            },
            {
              name: 'add',
              params: ['name'],
              strict: false
            }
          ]
        }
      });
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