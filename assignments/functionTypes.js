// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow function with Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
    return String(n);
}

// Function Expression
let convertToString1 = function(n) {
    return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
    return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//Function Declaration
function increment(n) {
    return n + 1;
}

//Function Expression
let increment = function(n) {
    return n + 1;
}

//Arrow function
let increment = n => n + 1;

//Arrow function with Curly Braces
let increment = n => {
    return n + 1;
}

//Function Invocation
increment(21);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Function Declaration
function decrement(n) {
    return n - 1;
}

//Function Expression
let decrement = function(n) {
    return n - 1;
}

//Arrow function
let decrement = n => n - 1;

//Arrow function with Curly Braces
let decrement = n => {
    return n - 1;
}

//Function Invocation
decrement(21);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */


//Function Declaration
function sumOfTwo(num1, num2) {
    return num1 + num2;
}

//Function Expression
let sumOfTwo = function(num1, num2) {
    return num1 + num2;
}

//Arrow function
let sumOfTwo = (num1, num2) => num1 + num2;

//Arrow function with Curly Braces
let sumOfTwo = (num1, num2) => {
    return num1 + num2;
}

//Function Invocation
sumOfTwo(21, 23);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */


//Function Declaration
function subtract(num1, num2) {
    return num2 - num1;
}

//Function Expression
let subtract = function(num1, num2) {
    return num2 - num1;
}

//Arrow function
let subtract = (num1, num2) => num2 - num1;

//Arrow function with Curly Braces
let subtract = (num1, num2) => {
    return num2 - num1;
}

//Function Invocation
subtract(21, 23);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//Function Declaration
function productOfTwo(num1, num2) {
    return num1 * num2;
}

//Function Expression
let productOfTwo = function(num1, num2) {
    return num1 * num2;
}

//Arrow function
let productOfTwo = (num1, num2) => num1 * num2;

//Arrow function with Curly Braces
let productOfTwo = (num1, num2) => {
    return num1 * num2;
}

//Function Invocation
productOfTwo(21, 23);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Declaration
function divide(num1, num2) {
    return num1 / num2;
}

//Function Expression
let divide = function(num1, num2) {
    return num1 / num2;
}

//Arrow function
let divide = (num1, num2) => num1 / num2;

//Arrow function with Curly Braces
let divide = (num1, num2) => {
    return num1 / num2;
}

//Function Invocation
divide(21, 23);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//Function Declaration
function multiplyBySelf(n) {
    return n;
}

//Function Expression
let multiplyBySelf = function(n) {
    return n;
}

//Arrow function
let multiplyBySelf = (n) => n;

//Arrow function with Curly Braces
let multiplyBySelf = (n) => {
    return n;
}

//Function Invocation
multiplyBySelf(21, 23);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

//Function Declaration
function performOperation(operation, x, y) {
    let result;

    switch (operation) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
    }

    return result;
}

//Function Expression
let performOperation = function(operation, x, y) {
    let result;

    switch (operation) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
    }

    return result;
}

//Arrow function
let performOperation = (operation, x, y) => {
    let result;

    switch (operation) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
    }

    return result;
}

//Function Invocation
performOperation("add", 25, 55);



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

//Function Declaration
function greater(a, b) {
    return a > b
}

//Function Expression
let greater = function(a, b) {
    return a > b;
}

//Arrow function
let greater = (a, b) => a > b;

//Arrow function with Curly Braces
let greater = (a, b) => {
    return a > b;
}

//Function Invocation
greater(23, 21);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

//Function Declaration
function lesser(a, b) {
    return a < b
}

//Function Expression
let lesser = function(a, b) {
    return a < b;
}

//Arrow function
let lesser = (a, b) => a < b;

//Arrow function with Curly Braces
let lesser = (a, b) => {
    return a < b;
}

//Function Invocation
lesser(21, 23);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

//Function Declaration
function checkEqual(a, b) {
    return a === b
}

//Function Expression
let checkEqual = function(a, b) {
    return a === b;
}

//Arrow function
let checkEqual = (a, b) => a === b;

//Arrow function with Curly Braces
let checkEqual = (a, b) => {
    return a === b;
}

//Function Invocation
checkEqual(23, 23);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

//Function Declaration
function smallestOfTwo(a, b) {
    return a < b ? a : b;
}

//Function Expression
let smallestOfTwo = function(a, b) {
    return a < b ? a : b;
}

//Arrow function
let smallestOfTwo = (a, b) => a < b ? a : b;

//Arrow function with Curly Braces
let smallestOfTwo = (a, b) => {
    return a < b ? a : b;
}

//Function Invocation
smallestOfTwo(21, 23);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

//Function Declaration
function largestOfTwo(a, b) {
    return a > b ? a : b;
}

//Function Expression
let largestOfTwo = function(a, b) {
    return a > b ? a : b;
}

//Arrow function
let largestOfTwo = (a, b) => a > b ? a : b;

//Arrow function with Curly Braces
let largestOfTwo = (a, b) => {
    return a > b ? a : b;
}

//Function Invocation
largestOfTwo(21, 23);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Function Declaration
function isEven(n) {
    return n % 2 === 0;
}

//Function Expression
let isEven = function(n) {
    return n % 2 === 0;
}

//Arrow function
let isEven = (n) => n % 2 === 0;

//Arrow function with Curly Braces
let isEven = (n) => {
    return n % 2 === 0;
}

//Function Invocation
isEven(22);
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

//Function Declaration
function isOdd(n) {
    return n % 2 === 1;
}

//Function Expression
let isOdd = function(n) {
    return n % 2 === 1;
}

//Arrow function
let isOdd = (n) => n % 2 === 1;

//Arrow function with Curly Braces
let isOdd = (n) => {
    return n % 2 === 1;
}

//Function Invocation
isOdd(21);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//Function Declaration
function grade(score, total) {
    let percent = (score / total) * 100;
    let grade;

    switch (true) {
        case percent < 60:
            grade = "F";
            break;
        case percent < 70:
            grade = "D";
            break;
        case percent < 80:
            grade = "C";
            break;
        case percent < 90:
            grade = "B";
            break;
        case percent < 100:
            grade = "A";
            break;
    }

    return grade;
}

//Function Expression
let grade = function(score, total) {
    let percent = (score / total) * 100;
    let grade;

    switch (true) {
        case percent < 60:
            grade = "F";
            break;
        case percent < 70:
            grade = "D";
            break;
        case percent < 80:
            grade = "C";
            break;
        case percent < 90:
            grade = "B";
            break;
        case percent < 100:
            grade = "A";
            break;
    }

    return grade;
}

//Arrow Function
let grade = (score, total) => {
    let percent = (score / total) * 100;
    let grade;

    switch (true) {
        case percent < 60:
            grade = "F";
            break;
        case percent < 70:
            grade = "D";
            break;
        case percent < 80:
            grade = "C";
            break;
        case percent < 90:
            grade = "B";
            break;
        case percent < 100:
            grade = "A";
            break;
    }

    return grade;
}

//Function Invocation
grade(95, 100);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

//Function Declaration
function stringsWithSpace(word1, word2) {
    return word1 + " " + word2;
}

//Function Expression
let stringsWithSpace = function(word1, word2) {
    return word1 + " " + word2;
}

//Arrow Function
let stringsWithSpace = (word1, word2) => word1 + " " + word2;

//Arrow function with Curly Braces
let stringsWithSpace = (word1, word2) => {
    return word1 + " " + word2;
}

//Function Invocation
stringsWithSpace("Karan", "Rathod")