// Import all specs modules.
import * as specs from './specs';

// Make objects iterable for readability.
Object.prototype[Symbol.iterator] = function* () {
  for (let key of Object.keys(this)) {
    yield([key, this[key]]);
  }
};

try {
  for (let [, spec] of specs) {
    spec();
  }

  console.log('OK');
} catch (err) {
  console.log(err.stack);
}
