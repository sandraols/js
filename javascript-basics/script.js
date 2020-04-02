// Requests the length of a side of a square.
// Displays the perimeter of the square in the console.

let sideOfSquare = +prompt('Type the lenght of one side of square:');
let perimeter = sideOfSquare * 4;
console.log(perimeter);


// Request a users year of birth and counts the users age.
// Displays result to the console.

const currentYear = 2020;
let birthYear = +prompt('Which year were you born?');
let age = currentYear - birthYear;
console.log(age);


// Requests a distance in kilometers and the time to cover it within. 
// Counts and displays the speed needed to be on time.

let distance = +prompt('How long is your distance in kilometers?');
let time = +prompt('How much time do you have? (minutes)');
let timeInHours = time / 60;
let speed = distance / timeInHours;
console.log(speed + ' km/h');


// User types in USD and the program converts them to EUR. 
// Then display the result in the console.

let usd = +prompt('How many dollars do you want to convert?');
const excangeRate = usd * 0.925;
console.log(excangeRate + ' EUR');


// User types in the values of a and b for the formula a * x + b = 0. 
// x is displayed in the console.

let a = +prompt('Type in a');
let b = +prompt('Type in b');
let x = -b / a;
console.log(x);
// const formula = a * x + b === 0;


// Current time in format HH:mm is requested
// Hours and minutes until tomorrow are displayed in console.

let currentTime = prompt('What time is it?', '12:00');
let hours = currentTime.slice(0, currentTime.indexOf(':'));
let minutes = currentTime.slice(currentTime.indexOf(':') + 1);
minutes = parseInt(minutes);
let hoursLeft = 23 - hours;
let minutesLeft = 60 - minutes;

if (minutes === 00) {
    hoursLeft++; 
    minutesLeft = 00;
};

console.log(`You have ${hoursLeft} hours and ${minutesLeft} minutes left of your day!`);