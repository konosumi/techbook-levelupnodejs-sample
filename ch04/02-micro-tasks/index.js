console.log('start');

Promise.resolve().then(() => console.log('microtasks1'));
process.nextTick(() => console.log('nextTick1'));
Promise.resolve().then(() => console.log('microtasks2'));
process.nextTick(() => console.log('nextTick2'));

console.log('end');

// Output:
// start
// end
// nextTick1
// nextTick2
// microtasks1
// microtasks2