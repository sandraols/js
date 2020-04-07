// Homework

// 1
// Write a calculator. Request 2 numbers and an operation as a symbol (+ - * /). 
// The program solves it depending on the operation and shows the result. 

const int1 = +prompt('What\'s the first number in your calculation?');
const operation = prompt('What\'s your operation? (*, -, + or /)');
const int2 = +prompt('What\'s the second number in your calculation?');
let answer;

switch (operation) {
    case '*': answer = int1 * int2;
        break;
    case '-': answer = int1 - int2;
        break;
    case '+': answer = int1 + int2;
        break;
    case '/': answer = int1 / int2;
        break;
    default: 'Please type correct operator.';
}

alert(`The answer is ${answer}`);

// if (operation === '*') {
//     answer = int1 * int2;
//     alert(`The answer is ${answer}`);
// } else if (operation === '-') {
//     answer = int1 - int2;
//     alert(`The answer is ${answer}`);
// } else if (operation === '+') {
//     answer = int1 + int2;
//     alert(`The answer is ${answer}`);
// } else if (operation === '/') {
//     answer = int1 / int2;
//     alert(`The answer is ${answer}`);
// } else { 
//     alert('Please type correct operator.');
// }

// 2
// Count the factorial of the number given by a user. 
// For example, 4! is 1 * 2 * 3 * 4 = 24, or 6! is 1 * 2 * 3 * 4 * 5 * 6 = 720.

let factorialNum = +prompt('Type your factorial number:');

for (let i = factorialNum - 1; i >= 1; i--) {
    factorialNum *= i;
}

alert(`The answer is ${factorialNum}`);

// 3 
//Count sheep. Request a non-negative integer, 3 for example, 
//and print a string with a murmur: “1 sheep...2 sheep...3 sheep...” 
//to the page using document.write(). If a user types a negative number in, alert an error.

let sheep = +prompt('How many sheep?', 5);
let sheepString = "";

for (let i = 1; i <= sheep; i++) {
    sheepString = sheepString + `${i} sheep...`;
}

if (sheep <= 0) {
    alert('No sheep!');
}

document.write(`<p>${sheepString}</p>`);

// 4
// Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. 
// Show the prompt as many times until the user answers correctly.

let calculation;

do {
    calculation = prompt('What is 2 + 2 * 2?');
} while (calculation != 6);

console.log('Congratulations! You solved it!');


// Classwork

// Request a user’s age and define whether he/she is an infant (0–2), a child (3-11), 
// a teen (12–18), an adult (19-60) or a senior citizen (60– ...). 
// Display the result in the console.

const age = prompt('How old are you?');

if (age <= 2) {
    console.log('infant');
} else if (age >= 3 && age <= 11) {
    console.log('child');
} else if (age >= 12 && age <= 18) {
    console.log('teen');
} else if (age >= 19 && age <= 60) {
    console.log('adult');
} else {
    console.log('senior citizen');
}

//Request a number from 0 to 9 from a user and display the symbol that is 
//placed on that keyboard button (for example, 1–!, 2–@, 3–# etc). 
//Display a result in the console.

const number = +prompt('Type a number from 0-9');

if (number === 1) {
    console.log('!');
} else if (number === 2) {
    console.log('@');
} else if (number === 3) {
    console.log('#');
} else if (number === 4) {
    console.log('€');
} else if (number === 5) {
    console.log('%');
} else if (number === 6) {
    console.log('&');
} else if (number === 7) {
    console.log('/');
} else if (number === 8) {
    console.log('(');
} else if (number === 9) {
    console.log(')');
} else {
    console.log('=');
}

// Ask a user 3 questions, each with 3 answer options. 
// Write these options also in the prompt window, after a question. 
// The user gets 2 points for each correct answer. Show the earned points after the test.

const firstQuestion = prompt('Which animal is the best? a) Dog, b) Cat, c) Fish');
const secondQuestion = prompt('Which country is the best? a) Sweden, b) Norway, c) Denmark');
const thirdQuestion = prompt('Which dish is the best? a) Pizza, b) Burger, c) Pasta');
let score = 0;

if (firstQuestion === 'b') {
    score += 2;
}

if (secondQuestion === 'a') {
    score += 2;
}

if (thirdQuestion === 'c') {
    score += 2;
}

console.log(`Your score is ${score}!`);


// Request a number from a user, and define whether it is positive, negative, or zero. 
// Display a resulting message as an alert.

const num = +prompt('Type a number');

if (num > 0) {
    alert(`${num} is a positive number.`);
} else if (num < 0) {
    alert(`${num} is a negative number.`);
} else {
    alert(`${num} is zero.`);
}

// Request a user’s age and check whether it is realistic (0-120 y.o.). 
//If it is realistic, display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?’.

const howOld = +prompt('How old are you?');
if (howOld >= 0 && howOld <= 120) {
    alert(`Hi! You are ${howOld} years old.`);
} else {
    alert('Hm... Is it even possible?');
}

// Request a number of a month from a user. Print the name of the month to the webpage as a 
//paragraph using document.write(). Use switch

const month = +prompt('Type in a number of a month' , 1);

switch(month) {
    case 1: document.write('<p>January</p>');
        break;
    case 2: document.write('<p>February</p>');
        break;
    case 3: document.write('<p>March</p>');
        break;
    case 4: document.write('<p>April</p>');
        break;
    case 5: document.write('<p>May</p>');
        break;
    case 6: document.write('<p>June</p>');
        break;
    case 7: document.write('<p>July</p>');
        break;
    case 8: document.write('<p>August</p>');
        break;
    case 9: document.write('<p>September</p>');
        break;
    case 10: document.write('<p>Oktober</p>');
        break;
    case 11: document.write('<p>November</p>');
        break;
    case 12: document.write('<p>December</p>');
        break;
    default: document.write('<p>Please type a valid number.</p>');
}

//While loop
//Request a number and an extent. Raise the number to the given power and 
//display the result. Do not use ** or Math.pow() here.

let integer = +prompt('Type a number', 10);
let extent = +prompt('Type the extent', 2);
let result = integer;

while (extent > 1) {
    result = result * integer;
    extent--;
}
console.log(result);