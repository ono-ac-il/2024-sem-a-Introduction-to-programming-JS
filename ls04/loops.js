var counter = 0;
var LIMIT = 3;

while (counter < LIMIT) {
    var randomNumber1 = Math.random() * 20 - 5;
    var randomNumber2 = Math.random() * 20 - 5;
    var randomNumber3 = Math.random() * 20 - 5;

    var x1 = Math.ceil(randomNumber1);
    var x2 = Math.ceil(randomNumber2);
    var x3 = Math.ceil(randomNumber3);

    console.log("x1", x1, "x2", x2, "x3", x3)

    var equation1; // x1 + x2 * x3
    var equation2; // x1 * x2 + x3

    equation1 = x1 * (x2 + x3);
    equation2 = x1 + x2 * x3;
    console.log("equation1", equation1, "equation2", equation2)

    var result;
    if (equation1 > equation2) {
        // "x1 * (x2 + x3) = res";
        result = String(x1) + " * (" + String(x2) + " + " + String(x3) + ") = " + String(equation1);
    } else {
        // "x1 + x2 * x3 = res";
        result = String(x1) + " + (" + String(x2) + " * " + String(x3) + ") = " + String(equation1);

    }
    console.log(result);
    console.log("\n==============\n")
    counter++;
}