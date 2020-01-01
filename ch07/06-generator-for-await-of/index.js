function* generatorFunction() {
  yield 'abc.'
  yield 'def'
  for (let i = 1; i < 3; i++) {
    yield i;
  }
}

(async () => {
  for await (const data of generatorFunction()) {
    console.log('data:', data);
  }
})();

// data: abc.
// data: def
// data: 1
// data: 2