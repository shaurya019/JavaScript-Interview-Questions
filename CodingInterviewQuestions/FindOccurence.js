function countCharacterOccurrences(str) {
  const map = new Map();
  for (const x of str) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }
  return map;
}
const str = "hello world";
const occurrences = countCharacterOccurrences(str);
console.log(occurrences);
