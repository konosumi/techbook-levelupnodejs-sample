
const async_hooks = require('async_hooks');
const eid = async_hooks.executionAsyncId();
const tid = async_hooks.triggerAsyncId();
const asyncHook = async_hooks.createHook({ init, before, after, destroy, promiseResolve });
asyncHook.enable();

//Promise.resolve(1);
//setTimeout(() => {
//   console.log('test')
//    asyncHook.disable();
//}, 10);

setTimeout(() => {
    asyncHook.disable();
 }, 50);

function init(asyncId, type, triggerAsyncId, resource) { }
function before(asyncId) { console.log('before', asyncId); }
function after(asyncId) {  console.log('after', asyncId); }
function destroy(asyncId) {  console.log('destroy', asyncId);  }
function promiseResolve(asyncId) {  console.log('promiseResolve', asyncId);  }