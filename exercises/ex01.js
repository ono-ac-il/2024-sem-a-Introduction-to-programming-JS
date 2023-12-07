// #Q.1
var y = 4;
var x = null;

if (y > 0) {
  x = 1;
}
console.log("result of #1", x);

// #Q.2
var min = 80;
var max = 90;
var score = 71; // input from the user

if (score >= min) {
  if (score <= max) {
    score = score + 5;
  }
}
console.log("result of #2", score);

// Q.3
var i = 100;
var item = !(i > 50);
var sameItem = i <= 50;
console.log("#3", item, sameItem);

// Q.4
var num4 = 4;
var result4 = null;

if (num4 >= 0) {
  if (num4 % 2 == 0) {
    result4 = true;
  }
}
console.log("#4, num4 is", num4, "result is", result4);

// Q.5
var x5 = 2;
var y5 = 3;
var result5 = null;
if (x5 > 0) {
  if (y5 > 0) {
    result5 = true;
  }
}
console.log("#5", result5);

// Q.6
var X = 8;
var y = -8;

// #6
var x6 = -2;
var y6 = -3;
var result6 = null;
if (x6 > 0) {
  if (y6 > 0) {
    result6 = true;
  }
}

if (x6 < 0) {
  if (y6 < 0) {
    result6 = true;
  }
}
console.log("#6", result6);
