var x = 0;
var limit = 10;

while (x < limit) {
    console.log(x);
    x++;
}

// Transform to Do...While loop
do {
    console.log(x);
    x++;
} while (x < limit);


/* advanced example */

var targetNumber = 5;

var tries = 5;
var counter = 0;

while (counter < tries) {
    var randomNumber = Math.random() * 10;
    var intNumber = Math.ceil(randomNumber); // a number between 0 - 10

    console.log('iteration', counter, 'number', intNumber);
    if (intNumber == targetNumber) {
        console.log('success')
        break;
    }
    counter++;
}




// With do while

var targetNumber = 5;

var tries = 5;
var counter = 0;

do {
    var randomNumber = Math.random() * 10;
    var intNumber = Math.ceil(randomNumber); // a number between 0 - 10

    console.log('iteration', counter, 'number', intNumber);
    if (intNumber == targetNumber) {
        console.log('success')
        break;
    }
    counter++;
} while (counter < tries);