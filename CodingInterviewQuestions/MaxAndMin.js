const arr = [1, 122, 31, 44, 78];
const maxFunction = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("The input must be a non-empty array.");
    }
    return arr.reduce((prev, curr) => prev > curr ? prev : curr, -Infinity);
}

console.log(maxFunction(arr));