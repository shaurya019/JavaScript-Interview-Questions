const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 28 }
  ];
  
  // Sorting in ascending order (youngest to oldest)
  people.sort((a, b) => a.age - b.age);
  
  console.log('Ascending:', people);