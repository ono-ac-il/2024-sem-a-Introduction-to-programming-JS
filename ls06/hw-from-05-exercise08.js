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