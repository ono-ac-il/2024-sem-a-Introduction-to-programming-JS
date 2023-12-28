function returnExample() {
    return 4;
    console.log(1); // unreachable code
}

var x = returnExample();
console.log(x);

function sum(a, b) {
    return a + b;
}

var result = sum(5, 10);
console.log(result); // Output: 15

console.log(sum(5, 10));

var result2 = sum(10, 20);
console.log(result2);