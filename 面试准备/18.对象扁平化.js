function flatobj(obj, parentkey = "", result = {}, separator = ".") {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newkey = parentkey ? `${parentkey}${separator}${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flatobj(obj[key], newkey, result, separator);
      } else {
        result[newkey] = obj[key];
      }
    }
    }
    return result
}
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: [5, 6, 7],
};
console.log(flatobj(obj))