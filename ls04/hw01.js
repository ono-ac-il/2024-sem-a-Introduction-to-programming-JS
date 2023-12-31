/* תכנית #1 חישוב מאפייני משולש
כתבו קובץ js בשם js.calculateTriangle ובו הצהירו על שלושה משתנים ובהם שלושה
מספרים חיוביים המציינים את אורכיהן של שלוש צלעות משולש. התכנית תדפיס ל-
:console
.1 את ממוצע אורכי הצלעות.
.2 את היקף המשולש.
.3 את שטח המשולש. כדי לחשב את שטח המשולש השתמשו בנוסחת Heron
הקובעת כי שטחו של משולש שווה לשורש הריבועי של (c-s)*(b-s)*(a-s*(s
עבור: c ,b ,a המציינים את אורך צלעות המשולש, ו- s המציין את מחצית
היקף המשולש.
לדוגמא, עבור הקלט 3 4 5 )המכיל שלושה מספרים( הפונקציה תדפיס ל-console
)המכיל שלושה מספרים עם רווח יחיד ביניהם(: 4 12 6
*/
var triangleSide1 = 3;
var triangleSide2 = 4;
var triangleSide3 = 5;

var perimeter = triangleSide1 + triangleSide2 + triangleSide3;

var triangleSidesAverage = perimeter / 3;

var a = triangleSide1;
var b = triangleSide2;
var c = triangleSide3;
var s = perimeter / 2;


var triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // sqrt[s*(s-a)*(s-a)*(s-c)]

// inputs: 3 4 5 -> output: 4 12 6
console.log(
    'triangleSidesAverage', triangleSidesAverage,
    'perimeter', perimeter,
    'triangleArea', triangleArea
);


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
    לדוגמה: אם הקלט הינו: 3 5 7 הפונקציה תחזיר:
56 = 7 *) 3 + 5(
    לדוגמה: אם הקלט הינו: 3 5 - 7 הפונקציה תחזיר:
    8 -= 7 +)5 -* 3(
        תכנית :#3 המנצחת בהתמודדות כדורגל
כתבו קובץ js בשם js.matchWinner והצהירו על 4 משתנים בהם ארבעה מספרים,
        המספרים מציינים את:
        א.מספר השערים שהבקיעה קבוצה #1 במשחק הראשון בין שתי הקבוצות)בו היא
הייתה המארחת(.
            ב.מספר השערים שהבקיעה קבוצה #2 במשחק הראשון בין שתי הקבוצות)בו היא
הייתה האורחת(.
                ג.מספר השערים שהבקיעה קבוצה #1 במשחק השני בין שתי הקבוצות)בו היא
הייתה האורחת(.
                    ד.מספר השערים שהבקיעה קבוצה #2 במשחק השני בין שתי הקבוצות)בו היא
הייתה המארחת(.
                        הפונקציה תחזיר, 1, 2 או 0 כתלות במי הקבוצה שניצחה בהתמודדות, או שאין
מנצחת)ואז הפונקציה תחזיר אפס(.
                            הכללים לקביעת המנצחת הינם הבאים:
                            א.אם קבוצה אחת ניצחה בשני המשחקים, או ניצחה במשחק האחד והמשחק השני
הסתיים בתיקו אזי היא המנצחת.
                            ב.אם קבוצה אחת ניצחה במשחק אחד והקבוצה השנייה ניצחה במשחק השני,
                            והפרש השערים הוא לטובת הקבוצה האחת)שניצחה 3: 1 לעומת 1: 0(אזי הקבוצה
האחת היא המנצחת.
                                ג.אם קבוצה אחת ניצחה במשחק אחד, הקבוצה השנייה ניצחה במשחק השני והפרש
השערים בשני המשחקים שווה, אזי מנצחת הקבוצה שהבקיעה יותר שערים עת היא
הייתה אורחת בהנחה שיש כזאת)לדוגמה: נניח שהקלט הוא 3 1 0 2 אזי המנצחת
היא הקבוצה השנייה(.
                                    ד.דין דומה חל עת שני המשחקים הסתיימו בתיקו)כלומר: זו שהבקיעה יותר שערי
חוץ היא המנצחת(.
                                        ה.אחרת, ההתמודדות מסתיימת בתיקו)למשל: 3 1 1 3(.
                                            הערות
הקפידו על סגנון תכנותי, בפרט על:
                                            .1 תיעוד על כל מרכיביו)בפרט ובמיוחד באיזה תת - מקרה או תת - מקרים זיהיתם,
                                                עד כה, שאתם מצויים(.
                                                    .2 עימוד.
.3 שמות משתנים.
.4 תכנית קריאה ולא מסורבלת.
הישמרו מלשלוח מבט, ולּו חטוף, בתכניתו של חברכם.לכל היותר אפשרו לו
להסביר לכם מילולית מה היה הרעיון שבאמצעותו הוא פתר את התכנית.
 תרגילים אלו מכסים הבנה בנושאים:
                                                    o משתנים פרימיטיביים
                                                )if-else (התכנית זרימת o
o אופרטורים
עזרים:
- מילון אנגלי - עברי למונחי מתמטיקה:
*/