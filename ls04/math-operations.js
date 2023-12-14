var x = Math.random(); // between [0, 1)
console.log(x);

var counter = 0;
var LIMIT = 5;
while (counter < LIMIT) {
    var x = Math.random();
    console.log(x);
    counter++;
}

// Math.random() -> [0,1)*10 -> [0, 10)
// [0,1) -> 0, 0.000001, 0.9, 0.999999999
// [0,10) -> 0, 0.000001, 9.9, 9.999999999
console.log("\n=======\n");

var counter = 0;
var LIMIT = 15;
while (counter < LIMIT) {
    var x = Math.random() * 10;
    console.log(x);
    counter++;
}

console.log("\n=======\n");

var counter = 0;
var LIMIT = 15;
while (counter < LIMIT) {
    var randomNumber = Math.random() * 10;
    var intNumber = Math.ceil(randomNumber);
    console.log(intNumber);
    counter++;
}