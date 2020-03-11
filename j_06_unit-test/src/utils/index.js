
// https://github.com/camsong/blog/issues/9
function strip(num, precision = 12) {
  // return Number.parseFloat(parseFloat(num.toPrecision(precision)));
  // 縮寫
  return +Number.parseFloat(num.toPrecision(precision));
}

export const add = (a, b) => a + b;
export const addBetter = (a, b) => strip(a + b);
