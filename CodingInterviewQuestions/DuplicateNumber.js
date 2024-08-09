const arr = [1, 2, 3, 4, 1, 2, 5];
const ans = arr.filter((ele, idx, arr) => arr.indexOf(ele) !== idx);
console.log(ans);