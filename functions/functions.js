// INDIVIDUAL CLASSWORK

/* 
Write a function that reverse a number. For example, 12345 = 54321.
*/

function reverseNum (number) {
    const numberStr = number.toString();
    let reversedNumber = "";
    for (let i = numberStr.length-1; i >= 0; i--) {
    reversedNumber = reversedNumber + numberStr[i];
    }
    return parseInt(reversedNumber);
}
console.log(reverseNum(12345)); // 54321

// Second option

// reverseNum = (number) => {
//     return parseInt(number.toString().split('').reverse().join(''));
// }
// console.log(reverseNum(12345)); // 54321


/*
Write a function that accepts three separate digits and makes them a number. 
For example, 1, 4, and 9 will become 149.
*/

const joinNumbers = (a, b, c) => {
    return parseInt(`${a}${b}${c}`);
}

console.log(joinNumbers(1, 2, 3)); // 123

// Second option

// function joinNums () {
//     return arguments.length === 3 ? Array.from(arguments).join('') : 'Wrong number of numbers';  
// }
// console.log(joinNums(1, 2, 3)); // 123


/*
Write a function that accepts a year and returns whether it is a leap year. 
A year is a leap year if it is (1) divisible by 4 and not divisible by 100, or else (2) is divisible by 400. 
It should return a boolean value.
*/

const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2019)); // false

// Second option

// const isLeapYear = year => year % 4 === 0 && year % 100 != 0 || year % 400 === 0;
// console.log(isLeapYear(2020)); // true


/*
Write a function that takes two parameters: the year of birth and the year to count years in relation to. 
Provide output in this format: For dates in the future: “You are NN years old.” 
For dates in the past: “You will be born in NN years.” 
If the year of birth equals the year requested return: 
“You were born this very year!” For example, for 2000 and 1998 you will get “You will be born in 2 years.”
*/

const birthCalculator = (birthYear, requestedYear) => {
    if (birthYear < requestedYear) {
        return `You are ${requestedYear - birthYear} years old.`;
    } else if (birthYear > requestedYear) {
        return `You will be born in ${birthYear - requestedYear} years.`;
    } else {
        return 'You were born this very year!';
    }
}
console.log(birthCalculator(1928, 2020)); // You are 92 years old.

// HOMEWORK

// 1
// Function that returns if number are even or odd.

const oddOrEven = number => number % 2 === 0 ? 'Even' : 'Odd';

console.log(oddOrEven(10)); // Even

// 2
// Function that removes vowels from string.

const removeVowels = (string) => {
    return string.replace(/a|e|o|i|u/gi, '');
}
console.log(removeVowels('Sandra')); // Sndr

// 3
// Function that repeats the given string certain number of times.

const repeatString = (str, num) => {
    return str.repeat(num);
}

console.log(repeatString('Sandra', 3)); //SandraSandraSandra


// ADDITIONAL HOMEWORK

// 1
// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. 
// If the seconds are not given, they should be displayed as 00.

const timestamp = (h, min, sec = '00') => {
    return `${h}:${min}:${sec}`;
}

console.log(timestamp(20, 14)); // 20:14:00

// 2
// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. 
// For example, 1 hour 25 minutes 43 seconds returns 5143 seconds.

const timeToSec = (h, min, sec) => {
    return h * (60 * 60) + min * 60 + sec;
}

console.log(timeToSec(2, 22, 22)); // 8542

// 3
// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, 
// and returns as a hh:mm:ss string.
const addZero = number => number < 10 ? `0${number}` : number.toString();

const secondsToTimestamp = (timeInSeconds) => {
    let hours = Math.floor(timeInSeconds / 3600);
    // let minutesDivisor = timeInSeconds % 3600;
    let minutes = Math.floor(timeInSeconds / 60) % 60;
    let seconds = Math.floor(timeInSeconds) % 60;
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

console.log(secondsToTimestamp(9979)); // 02:46:19


// 4
// Write a function that counts the difference between the dates. 
// The function accepts 6 parameters that describe 2 dates (hours, minutes, and seconds for each one), 
// and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: 
// at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

const datesDiff = (h1, min1, sec1, h2, min2, sec2) => {
    let firstDate = timeToSec(h1, min1, sec1);
    let secondDate = timeToSec(h2, min2, sec2);
    let secondsDiff = firstDate > secondDate ? firstDate - secondDate : secondDate - firstDate;
    return secondsToTimestamp(secondsDiff);
}

console.log(datesDiff(14, 20, 00, 16, 20, 00)); // 02:00:00