const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const a = (str) => {
  console.log("防抖a", str);
};
const b = (str) => {
  console.log("防抖b", str);
};
const debouncea = debounce(a, 1000);
const debounceb = debounce(b, 1000);
debouncea("1000ms");
debounceb("1000ms");
debouncea("1000ms");
debounceb("1000ms");
debouncea("1000ms");
debounceb("1000ms");
