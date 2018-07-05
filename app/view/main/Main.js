Ext.define('ExtChat.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',

    'ExtChat.view.main.MainController',
    'ExtChat.view.main.MainModel',
    'ExtChat.view.main.Chat',
    'ExtChat.view.main.MessageInput'
  ],

  controller: 'main',
  viewModel: 'main',

  ui: 'navigation',

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: 'stretchmax'
    },
    title: {
      bind: {
        text: '{name}'
      },
      flex: 0
    },
    iconCls: 'fa-th-list'
  },

  tabBar: {
    flex: 1,
    layout: {
      align: 'stretch',
      overflowHandler: 'none'
    }
  },

  responsiveConfig: {
    tall: {
      headerPosition: 'top'
    },
    wide: {
      headerPosition: 'left'
    }
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      plugins: 'responsive',
      responsiveConfig: {
        wide: {
          iconAlign: 'left',
          textAlign: 'left'
        },
        tall: {
          iconAlign: 'top',
          textAlign: 'center',
          width: 120
        }
      }
    }
  },

  items: [{
    title: 'Chat',
    iconCls: 'fa-comments',
    layout: {
      type: 'vbox',
      align: 'center',
      pack: 'start'
    },
    defaults: {
      width: 460
    },
    items: [{
      xtype: 'chat',
      flex: 1
    }, {
      xtype: 'messageinput'
    }]
  }, {
    title: 'Settings',
    iconCls: 'fa-cog',
    bind: {
      html: '{TODO}'
    }
  }]
});
