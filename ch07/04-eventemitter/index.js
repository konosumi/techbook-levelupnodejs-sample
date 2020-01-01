const { EventEmitter } = require('events');

const ev = new EventEmitter();

// 'eventName'のイベントが起きたら、コールバックを発火する
ev.on('eventName', (data) => {
    console.log('on', data);
});

// 'eventName'のイベントが起きたら、コールバックを一度だけ発火する
ev.once('eventName', (data) => {
    console.log('once', data);
});

// イベントを送信
ev.emit('eventName', 1234)