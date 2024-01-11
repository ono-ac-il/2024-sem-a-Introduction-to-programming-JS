/*
1- כאשר הפונקציה תחזיר
הפסק לקלוט מספרים והדפס למסך:
1
.
סכום כל המ
פרים שהוזנו ס
2
.
ממוצע כל המספרים שהוזנו
*/
// this function retrun a number between -1 to 10
function getNum() {
    return parseInt(Math.random() * 11) - 1;
}

var arr = [];


while (num == -1) {
    arr.push(num);
    var num = getNum();
}

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);
console.log(sum / arr.length);