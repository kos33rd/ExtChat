Ext.define('ExtChat.store.Messages', {
    extend: 'Ext.data.Store',

    alias: 'store.messages',

    fields: [
        'sender', 'timestamp', 'message'
    ],

    data: { items: [
        { sender: 'Jean Luc', timestamp: "2018-07-04T21:00:00", message: "555-111-1111", own: false },
        { sender: 'Worf',     timestamp: "2018-07-04T21:00:02",  message: "555-222-2222", own: true },
        { sender: 'Deanna',   timestamp: "2018-07-04T21:00:05",    message: "555-333-3333", own: false },
        { sender: 'Data',     timestamp: "2018-07-04T22:30:00",        message: "LEL KEK", own: false }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
