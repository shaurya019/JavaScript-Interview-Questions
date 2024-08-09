const arr = [1, 122, 31, 44, 78];
const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);
