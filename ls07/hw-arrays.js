
function calcMaam(x, maam) {
    return x * maam + x;
}
const maam = 17;

function sumAll(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
// #0 -> sum = sum + arr[0]  --> sum = 0 + 1 = 1
// #1 -> sum = sum + arr[1]  --> sum = 1 + 2 = 3
// #2 -> sum = sum + arr[2]  --> sum = 3 + 3 = 6

var myArr = [];
for (var i = 0; i < 100; i++) {
    myArr.push(i + 1);
}

console.log(myArr);
var res = sumAll(myArr);
console.log(res);