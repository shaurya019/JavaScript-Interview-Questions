const people = [
    { name: "John", age: 24 },
    { name: "Jane", age: 30 },
    { name: "Mike", age: 27 },
    { name: "Sarah", age: 22 },
  ];
  
  const firstOlderThan25 = people.find(x => x.age > 25);
  
  console.log(firstOlderThan25);