// Basic syntax of functions
function sayHello() {
    console.log("Hello!");
}

sayHello(); // Output: Hello!


// Function Parameters and Arguments
function sayHello(name) {
    console.log("Hello " + name + "!");
}

greet("Student"); // Output: Hello Student!


// Return Values
function sum(a, b) {
    return a + b;
}

var result = sum(5, 10);
console.log(result); // Output: 15


// Local (or Function) Scope
var globalVar = "I am global";
function myFunction() {
    var localVar = "I am local";
    console.log(localVar); // Output: I am local
}

console.log(globalVar); // Output: I am global
console.log(localVar); // Error: localVar is not defined




// Hoisting

sayMyName(); // Output: My Name

function sayMyName() {
    console.log("My Name");
}

console.log("Hello"); // Output: Hello

/* How the code is actually interpreted by the interpreter */
function sayMyName() {
    console.log("My Name");
}

sayMyName(); // Output: My Name
console.log("Hello"); // Output: Hello




// Extra: Scope Chain and Lexical Scoping
function outerFunction() {
    var outerVar = "I am outside";

    function innerFunction() {
        console.log(outerVar); // Output: I am outside
    }

    innerFunction();
}
