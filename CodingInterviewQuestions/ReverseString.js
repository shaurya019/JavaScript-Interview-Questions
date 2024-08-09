const str1 = "hello";
let reversedStr1 = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reversedStr1 += str[i];
}

console.log(reversedStr); 


const str2 = "hello";
const reversedStr2 = str2.split('').reverse().join('');
console.log(reversedStr2); // Output: "olleh"
// Explanation:
// str.split(''): Converts the string into an array of characters.

// Example: "hello" becomes ['h', 'e', 'l', 'l', 'o'].
// reverse(): Reverses the order of the elements in the array.

// Example: ['h', 'e', 'l', 'l', 'o'] becomes ['o', 'l', 'l', 'e', 'h'].
// join(''): Joins the elements of the array back into a single string.

// Example: ['o', 'l', 'l', 'e', 'h'] becomes "olleh".