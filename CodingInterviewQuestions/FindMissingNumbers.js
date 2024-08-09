const arr = [1, 2, 19, 0, 4, 7];
const miss = [];

const missing = (arr) => {
    const missMin = Math.min(...arr);
    const missMax = Math.max(...arr);
    for (let i = missMin; i < missMax; i++){
        if (arr.indexOf(i) < 0) {
            miss.push(i);
        }
    }
    return miss;
}
