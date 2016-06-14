export function saveJson(key, data) {
  return save(key, data, true);
}

export function loadJson(key, fallback = {}) {
  return load(key, fallback, true);
}

export function save(key, data, isJson = false) {
  try {
    localStorage.setItem(key, isJson ? JSON.stringify(data) : data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export function load(key, fallback = {}, isJson = false) {
  try {
    const data = localStorage.getItem(key) || JSON.stringify(fallback);
    return isJson ? JSON.parse(data) : data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
