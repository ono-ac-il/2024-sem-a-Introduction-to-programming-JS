var age = 30;

var discount = 20; // 20NIS discount from age 35+

var sum = 100; // the sum to pay

if (typeof age == 'number') {
    if (age > 34) {
        sum = sum - discount;
    }
    console.log('Total payment:', sum);
} else {
    console.log('age is not a number')
}