Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
  }
  if (typeof callback !== "function") {
  }
  let obj = Object(this);
  let len = obj.length;
  let result = new Array(len);
    for (let i = 0; i < len; i++) {
        let textresult
        let keyelement=obj[i]
        if (thisArg !== undefined) {
           textresult= callback.call(thisArg,keyelement,i,obj)
        } else {
            textresult = callback( keyelement, i, obj);
        }
        result[i] = textresult;
    }
    return result;
};
const numbers = [1, 2, 3];
const doubled = numbers.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6]
