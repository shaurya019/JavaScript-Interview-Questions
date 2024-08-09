const arr = [1, 4, 5, 3];
const value = (arr) => {
    findLarge = Math.max(...arr);
    index = arr.indexOf(findLarge);
    arr.splice(index, 1);
    return arr;
}