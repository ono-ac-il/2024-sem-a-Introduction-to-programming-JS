/*
תכנית #2 איתור פעולה שתוצאתה מרבית
כתבו קובץ js בשם js.maximumResult ובו שלושה משתנים ובהם שלושה מספרים
שלמים ) חיוביים, שליליים, או אפס(ואתרו את הערך הגדול ביותר אליו ניתן להגיע עת
מבצעים כפל יחיד וחיבור יחיד על שלושת המספרים לפי הסדר; כלומר תכניתכם
רשאית ראשית לחבר את שני המספרים הראשונים ואז לכפלם במספר הנותר, או
ראשית לכפול שני הראשונים ואז להוסיף למכפלה את המספר הנותר, כאשר המטרה
היא, כאמור, להגיע לתוצאה הגדולה ביותר.
    רמז: יש בדיוק שתי אפשרויות לתוצאה הגדולה ביותר, ויש להכריע ביניהם.
על הפונקציה להחזיר את התרגיל שבוצע, ואת התוצאה, ללא רווחים כמו בדוגמאות
הבאה.
input: 7 5 3
output: 7 * (5 + 3) = 56

input: 7 -5 3 
output: 7 + (-5 * 3) = -8
*/
var x1 = 7;
var x2 = -5;
var x3 = 3;

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