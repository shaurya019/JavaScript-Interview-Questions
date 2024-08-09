const arr1 = [1, 2, 3];
const arr2 = [11, 12, 3];

function arraysIntersects(arr1, arr2) {
  let x = Math.max(arr1.length, arr2.lengt);
  for (let i = 0; i < x; i++) {
    if (arr1[i] === arr2[i]) {
      return arr1[i];
    }
  }
  return -1;
}


function arraysIntersection(arr1, arr2) {
    // Create a Set from the second array for fast lookup
    const set2 = new Set(arr2);

    // Filter the first array to include only elements that are also in set2
    return arr1.filter(value => set2.has(value));
}