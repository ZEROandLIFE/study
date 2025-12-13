let arr1 = [[[[[[1], 2], 3], 4], 5], 6];
arr1.flat(Infinity);
function flat1(arr) {
    return arr.reduce((pre,cur) => {
      return pre.concat(Array.isArray(cur)?flat1(cur):cur)
  },[])
}
function flatdeep(arr,deep=Infinity) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur)&&deep>=1 ? flatdeep(cur,deep-1) : cur);
  }, []);
}

arr = [1, 2, 3, 2, 4, 1, 5];
let result = [...new Set(arr)];
result = arr.filter((item, index) => arr.indexOf(item) === index);

