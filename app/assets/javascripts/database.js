export function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(err);
    return false;
  }
  return true;
}

export function load(key, fallback = {}) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}
