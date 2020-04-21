# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23);
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
```
<!-- ANSWER: -->
44

4. What is the output or error of the code below.

```js
function add(a = 0, b) {
  return a + b;
}
add(21);
```
<!-- ANSWER: -->
NaN, as b is undefined 


5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);
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
```
<!-- ANSWER: -->
//SyntaxError: expected expression, got keyword 'if'





8. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
isItIf(if(true){console.log('Testing')});
```
<!-- ANSWER: -->
//SyntaxError: expected expression, got keyword 'if'

//We can't use if/else in function parameter 


