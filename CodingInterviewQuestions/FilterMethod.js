// filter: Creates a new array with all elements that pass the test implemented by the provided function.

const people = [
  { name: "John", age: 24 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 27 },
  { name: "Sarah", age: 22 },
];

const olderThan25 = people.filter(x => x.age > 25);

console.log(olderThan25);