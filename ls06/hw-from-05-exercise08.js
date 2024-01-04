// power of 4^4 = 4 * 4 * 4 * 4

var num = 4;
var power = 4;
var result = 1;

/*
while (power > 0) {
    result = result * num;
    power--;
}
*/

for (var i = 1; i <= power; i++) {
    result = result * num;
}

console.log(result);



function powerOf(num, power) {
    var result = 1;

    for (var i = 1; i <= power; i++) {
        result = result * num;
    }

    console.log(result);
}

powerOf(4, 4);
powerOf(2, 10);
powerOf(3, 3);