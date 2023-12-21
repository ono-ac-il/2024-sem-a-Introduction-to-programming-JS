// Without a loop
var LIMIT = 3;
var x = 1;

if (x % 2 == 0) {
    console.log(x);
}
x++;

if (x % 2 == 0) {
    console.log(x);
}
x++;

if (x % 2 == 0) {
    console.log(x);
}
x++;
if (x < LIMIT) {
    if (x % 2 == 0) {
        console.log(x);
    }
    x++;
}

if (x < LIMIT) {
    if (x % 2 == 0) {
        console.log(x);
    }
    x++;
}

console.log("========= while ========")
// with while loop
var LIMIT = 6;
var x = 1;
while (x < LIMIT) {
    if (x % 2 == 0) {
        console.log(x);
    }
    x++;
}

