function step1() {
    // Creating an empty array
    var emptyArray = [];
    console.log(emptyArray);
    // Creating an array with elements
    var colors = ["red", "green", "blue"];
    console.log(colors);
}

function step2() {
    // array indexes
    /*              0       1        2     */
    var colors = ["red", "green", "blue"];

    var firstColor = colors[0];
    var secondColor = colors[1];
    var thirdColor = colors[2];
    var fourthColor = colors[3];
    var negativeIndex = colors[-1];

    console.log(firstColor, secondColor, thirdColor, fourthColor);
    console.log("negativeIndex", negativeIndex);
}

function step3() {
    // push, pop
    var numbers = [1, 2, 3];
    console.log(numbers); // output: [1, 2, 3]

    numbers.push(14); // Add 4 to the end
    console.log(numbers); // output: [1, 2, 3, 14]

    numbers.pop(); // Remove the last element (4)
    console.log(numbers); // output: [1, 2, 3]

    numbers.pop(); // Remove the last element (3)
    console.log(numbers); // output: [1, 2]
}

function step4() {
    // length
    var numbers = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4];
    console.log(numbers.length); // output: 11
}

function step5() {
    var animals = ["Dog", "Cat", "Owl"]; // animals.length = 3
    // Using a for loop to iterate
    for (var i = 0; i < animals.length; i++) {
        console.log(animals[i]);
    }
}



step5();