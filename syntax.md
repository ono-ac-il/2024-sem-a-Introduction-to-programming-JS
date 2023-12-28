# Syntax

## Variables

A variable can use letter and numbers, but must starts with a letter;

The variable name is case-sensitive, `A` is different from `a`;

### Declare a variable

```javascript
var x;
var y;
```

### Variable naming convenstions

We use CAML-case for more then 1 word variable name( first word small letter and every additional word starts with capital letter)

#### Examples

1 word variable: `var something`;

2 words variable: `var someWord`;

3 words variable: `var someAddiotionalWord`

### Assign value to a variable

```javascript
// x and y must be declared before assignmnets
x = 1;
y = false;
```

### Declare a variable and assignment

```javascript
var x = 1;
var y = false;
var z = "SomeString";

var x1 = 2;
var y1 = true;
var z1 = "!#$%@$^UYG$%GBw4g45rgqgq4gh";
```

## Flow control

### if syntax

*boolean expression*: and variable or operator that return Boolean, for exaple: `1>2`, `var a = false`

```javascript

if (<<boolean expression>> or <<boolean variable>>) {
    // our code
} 
```

### single if example

```javascript
if (age > 30) {
    console.log("20% discount");
} 
```

### if-else example

```javascript
if (age > 30) {
    console.log("20% discount");
}  else if (age > 20) {
    console.log("10% discount");
}

```

## Loops

### While loop syntax

*boolean expression*: and variable or operator that return Boolean, for exaple: `1>2`, `var a = false`

```javascript
while (<<boolean expression>> or <<boolean variable>>) {
    // our code
}
```

### While loop example

```javascript
while (x <= limit) {
    console.log(x);
    x++;
}
```

## Casting

convert number to string: `String(3)`

## Switch

```javascript
switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}
```
