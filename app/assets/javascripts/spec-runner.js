import requireDir from 'require-dir';

// Import all specs modules.
const specModules = requireDir('specs');

// Make objects iterable for readability.
Object.prototype[Symbol.iterator] = function* () {
  for (let key of Object.keys(this)) {
    yield([key, this[key]]);
  }
};

try {
  for (let [, module] of specModules) {
    for (let [, spec] of module.default) {
      spec();
    }
  }

  console.log('OK');
} catch (err) {
  console.log(err.stack);
}
