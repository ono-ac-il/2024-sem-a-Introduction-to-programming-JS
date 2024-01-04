// Q.1
/* 1. Create a function named welcome that print to console Welcome
 welcome();
 // console output: "Weclome"
 */
function welcome() {
    console.log("Weclome");
}
welcome();

// Q.2
/* 2. Create a function named sum that print to console the sum of two integers
sum(2, 3);
// console output: 5 */
function sum(x, y) {
    console.log(x + y);
}
sum(2, 3);

// Q.3
/* Create a function named add10 that takes one user input number and pass it
to a function and print to the console the same by adding 10 to its value.
• (* note: You should use Number to convert string to number and prompt to
take input *)
 var x = 10; // NOTICE: x should be the user's input
 add10(x);
 // console output: 15
 */
function add10(x) {
    x = Number(x);
    console.log(x + 10);
}
add10("5");

// Q.4
/* 4. Create a function named add10 that takes one user input number and pass it
to a function thats returns the same by adding 10 to its value. (* note: You
should use Number to convert string to number and prompt to take input *)
var x = 10; // NOTICE: x should be the user's input
var ret = add10(x);
console.log(ret);
// console output: 15
*/
function add10(x) {
    x = Number(x);
    return x + 10;
}
var ret = add10("5");
if (ret % 5 == 0) {

}
console.log(ret);


// Q.8
/* 8. Create a function named isEvenAndPositive that receive a number and
returns true if the number is even and positive and false if not.
• note: Use the logical and (&&) operator
 var res;
 res = isPositiveEven(4);
 console.log(res); //console output: true
 res = isPositiveEven(-2);
 console.log(res); //console output: false */

function isEvenAndPositive(x) {
    if (x % 2 == 0 && x > 0) {
        return true;
    } else {
        return false;
    }
}

var res = isEvenAndPositive(4);
console.log(res);
res = isEvenAndPositive(-2);
console.log(res);


// Q.9
/* 9. Create a function named opposite that receive boolean and returns the
opposite.
• note: Use the logical not (!) operator
 var res;
 res = opposite(true);
 console.log(res); //console output: false
 res = opposite(false);
 console.log(res); //console output */

function opposite(val) {
    return !val;
}
var res;
res = opposite(true);
console.log(res); //console output: false
res = opposite(false);
console.log(res); //console output */



// Q.10
/* 10. Create a function named either that receives 3 parameters and checks if at
least one parameters returns true.
• note: Use the logical or (||) operator
 var res;
 res = either(true, false, false);
 console.log(res); //console output: true
 res = either(true, true, false);
 console.log(res); //console output: true
 res = either(false, false, false);
 console.log(res); //console output: false */

function either(b1, b2, b3) {
    if (b1 == true) {
        return true;
    } else if (b2 == true) {
        return true;
    } else if (b3 == true) {
        return true;
    } else {
        return false;
    }
}

function either(b1, b2, b3) {
    if (b1 == true || b2 == true || b3 == true) {
        return true;
    } else {
        return false;
    }
}