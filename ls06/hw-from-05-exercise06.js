/*
יש לרשום לולאה שהופכת מספר, לדוגמה: 12345 יהפוך ל .54321 
)יש להשתמש בטכניקה של חילוק ושארית החלוקה(
*/

var x = parseInt(5.5);
console.log(x); // output: 5

var example1 = 12345 % 10;
console.log('example1', example1);

var example2 = 12345 / 10;
console.log('example2', example2)

var num = 12345;
var oppositeNum = 0;

for (var i = 0; num > 0; i++) {
    var remain = num % 10;
    oppositeNum = oppositeNum * 10 + remain;
    num = num / 10;
    num = parseInt(num);
}

console.log(oppositeNum);

/*
    #0 ---> 
        remain = num % 10 = 12345 %10 = 5
        oppositeNum = oppositeNum * 10 + remain = 0 * 10 + 5 = 5
        num = num / 10 = 1234.5
        num = parseInt(1234.5) = 1234
        num = 1234 , oppositeNum = 5

    #1 --->
        remain = 1234 % 10 = 4
        oppositeNum = oppositeNum * 10 + remain = 5 * 10 + 4 = 54
        num = 1234 / 10 = 123.4
        num = parseInt(123.4) = 123

    #2 -->
        remain = num % 10 = 123 % 10 = 3
        oppositeNum = oppositeNum * 10 + remain = 54 * 10 + 3 = 543
        num = 123 / 10 = 12.3
        num = parseInt(12.3) = 12
    #3 -->
        remain = num % 10 = 12 % 10 = 2
        oppositeNum = oppositeNum * 10 + remain = 543 * 10 + 2 = 5430 + 2 = 5432
        num = 12 / 10 = 1.2
        num = parseInt(1.2) = 1
    #4 -->
        remain = num % 10 = 1 % 10 = 1
        oppositeNum = oppositeNum * 10 + remain = 5432 * 10 + 1 = 54320 + § = 54321
        num = 1 / 10 = 0.1
        num = parseInt(0.1) = 0
*/