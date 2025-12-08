const throttle = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
const throttleDate = (fn, delay) => {
  let lastCallTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCallTime >= delay) {
      fn(...args);
      lastCallTime = now;
    }
  };
};
const a = (str) => {
  console.log("节流a", str);
};
const b = (str) => {
  console.log("节流b", str);
};
const throttlea = throttle(a, 1000);
const throttleb = throttle(b, 1000);
throttlea("1000ms");
throttleb("1000ms");
throttlea("1000ms");
throttleb("1000ms");
throttlea("1000ms");
throttleb("1000ms");
