const input = prompt("Please enter")
var fact = 1;
var flag = 0;
for (let i = 2; i < input; i++){
    if (input % i == 0) {
        flag = 1;
        break;
    }
}
if (flag === 0) {
    console.log('Not Prime');
}