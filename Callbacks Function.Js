// Callbacks are functions passed as arguments to other functions and are executed after the completion of some operation. They are essential in JavaScript for handling asynchronous operations.

// Basic Callback

function help(name, callback) {
  console.log("HELLO", name);
  callback();
}

function help2() {
  console.log("HELLO2");
}

help("SP", help2);

// Asynchronous Callback

function fetchData(callback) {
    setTimeout(() => {
      const data = { user: 'Alice', age: 25 };
      callback(data);
    }, 1000); // Simulates a 1-second delay
  }

// Callback function to handle the fetched data
function handleData(data) {
  console.log("Fetched Data:", data);
}

// Call fetchData with handleData as a callback
fetchData(handleData);
