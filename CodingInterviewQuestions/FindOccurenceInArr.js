const valueToFind = parseInt(input, 10);
const array = [1, 2, 3, 4, 2, 5, 2];

const firstIndex = array.indexOf(valueToFind);
if (firstIndex !== -1) {
  console.log(`First occurrence of ${valueToFind} is at index ${firstIndex}`);
} else {
  console.log(`${valueToFind} not found in the array`);
}