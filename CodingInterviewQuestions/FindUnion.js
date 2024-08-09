const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

function arraysUnion(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    
    // Create a Set from the combined array to remove duplicates
    const uniqueSet = new Set(combined);
    
    // Convert the Set back to an array using Array.from
    return Array.from(uniqueSet);
}
const union = arraysUnion(arr1, arr2);
console.log(union);
