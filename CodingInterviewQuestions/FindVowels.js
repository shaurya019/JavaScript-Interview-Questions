var string = prompt("enter");
const vowels = ['a', 'e', 'i', 'o', 'u'];
const countVowel = (str) => {
    var c = 0;
    for (let i of str.toLowerCase()) {
        if (vowels.includes(i)) {
            c++;
        }
    }
    return c;
}