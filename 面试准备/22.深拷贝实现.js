function deepClone(target, map = new WeakMap()) {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  if (map.has(target)) {
    return map.get(target);
  }
  let clone;
  if (Array.isArray(target)) {
    clone = [];
  } else {
    clone = Object.create(Object.getPrototypeOf(target));
  }
  map.set(target, clone);
  for (key in target) {
    if (target.hasOwnProperty(key)) {
      clone[key] = deepClone(target[key], clone);
    }
  }
  return clone;
}
