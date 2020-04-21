# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23);
//Output:The code is not valid, unexpected token "var"
```
<!-- ANSWER: -->
// Code is invalid, you don't need to define the data type of a function argument.    
// Here's the correct way to do it:
```js
function add(a = 0, b = 0){
  return a + b;
}
add(21, 23);
```

2. What is the output or error of the code below.

```js
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);

<!-- ANSWER: -->
//"SyntaxError: missing ) after formal parameters"
//The error popped up as we have a semicolon in place of a comma in the first line


3. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21, 23);
//Output: 44
```
<!-- ANSWER: -->
44

4. What is the output or error of the code below.

```js
function add(a = 0, b) {
  return a + b;
}
add(21); 
//Output: NaN because "a" will be assigned 21 and b will remain undefined. The addition of them would result to NaN
```
<!-- ANSWER: -->
NaN, as b is undefined 


5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);
//Output: 21 as 1st parameter is assigned undefined, owing to which it will take the default parameter that is 0 and b gets 
//assigned 21.
```
<!-- ANSWER: -->
//21


6. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(211);
//unexpected token "if", if is a statement and return can only return a value, a variable or an evaluation of expression(i.e. value)
```
<!-- ANSWER: -->
//SyntaxError: expected expression, got keyword 'if'


7. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(21);
//unexpected token "if", if is a statement and return can only return a value, a variable or an evaluation of expression(i.e. value)
```
<!-- ANSWER: -->
//SyntaxError: expected expression, got keyword 'if'





8. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
isItIf(if(true){console.log('Testing')});
//Output: unexpected token "if", in this variable "ifElse" is being assigned a statement, a variable can only be assigned with value or expression and not a statement.
```
<!-- ANSWER: -->
//SyntaxError: expected expression, got keyword 'if'

//We can't use if/else in function parameter 


