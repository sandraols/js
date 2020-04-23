// ADDITIONAL EXERCISES

// An object that describes a car with the following methods: 
// A method that displays the car info.
// A method for counting a time frame necessary to cover a given 
// distance with the average speed. Every 4 hours the driver has to take a 1-hour break.

// function used in kilometersToTime method
const secondsToTimestamp = (timeInSeconds) => {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds / 60) % 60;
    let seconds = Math.floor(timeInSeconds) % 60;
    return [hours, minutes, seconds];
}

let car = {
    carInfo: {
        manufacturer: 'Volvo',
        model: 'V70',
        'release year': 2012,
        'average speed': 100 // km/h
    },
    displaycarInfo () { 
        for (let key in this.carInfo) {
            console.log(`${key}: ${this.carInfo[key]}`);
        }
    },
    kilometersToTime (kilometers) {
        const timeInHours = kilometers / this.carInfo['average speed'];
        const timeBlocks = Math.ceil(timeInHours / 4);
        const breaksInHours = timeBlocks - 1;
        const totalTime = (timeInHours + breaksInHours) * 3600;
        const timeStamp = secondsToTimestamp(totalTime);
        const [hours, minutes, seconds] = timeStamp;
        console.log(`You need ${hours} hours ${minutes} minutes and ${seconds} seconds for this journey!`);
    }
};

car.displaycarInfo();
car.kilometersToTime(150); // You need 1 hours 30 minutes and 0 seconds for this journey! 


// An object that describes time (hours, minutes, seconds)
// With following methods:
// A method for displaying the time in format hh:mm:ss; 
// A method for changing the time by a given amount of seconds; 
// A method for changing the time by a given amount of minutes; 
// A method for changing the time by a given amount of hours. 
let time = {
    timeInfo: {
        hours: 5,
        minutes: 50,
        seconds: 38
    },
    timeToTimestamp () {
        const addZero = num => num < 10 ? `0${num}` : num;
        let {hours, minutes, seconds} = this.timeInfo;
        console.log(`${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`);
    },
    timeInfoToSeconds () {
        let {hours, minutes, seconds} = this.timeInfo;
        hours = hours * 3600;
        minutes = minutes * 60;
        return hours + minutes + seconds;
    },
    secondsToTimestamp (timeInSeconds) {
        let hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor(timeInSeconds / 60) % 60;
        let seconds = Math.floor(timeInSeconds) % 60;
        return {hours, minutes, seconds};
    },
    addSeconds (seconds) {
        this.timeInfo = this.secondsToTimestamp(seconds + this.timeInfoToSeconds());
    },
    addMinutes (minutes) {
        this.timeInfo = this.secondsToTimestamp(minutes * 60 + this.timeInfoToSeconds());
    },
    addHours (hours) {
        this.timeInfo = this.secondsToTimestamp(hours * 3600 + this.timeInfoToSeconds());
    },
};

time.addHours(5); // 10:50:38
time.timeToTimestamp();
time.addMinutes(5); // 10:55:38
time.timeToTimestamp();
time.addSeconds(55); // 10:56:33
time.timeToTimestamp();


// HOMEWORK 

// 1
// A groceries list array. 
let groceryList = [
    {
        name: 'Banana',
        amount: 5,
        isBought: false
    },
    {
        name: 'Apple',
        amount: 1,
        isBought: false
    },
    {
        name: 'Kiwi',
        amount: 12,
        isBought: false
    }
];

// Function for displaying the entire list
const displayGroceryList = () => {
    groceryList.forEach((grocery) => {
        document.write(`<div class="box__grocery"><h1>${grocery.name}</h1><p>amount: ${grocery.amount}</p>bought: ${grocery.isBought}<p></div>`);
    });
}

// Function for adding a purchase to the list. If a product already exists in the array, amount is increased in existing purchase
const addProduct = (name, amount) => {
    let foundGrocery = groceryList.find(grocery => grocery.name === name);
    if (!foundGrocery) {
        groceryList.push({name, amount, isBought: false});
    } else {
        foundGrocery.amount += amount;
    }
}

// Function for purchasing a product. The function accepts the name of a product and marks it as bought
const purchaseProduct = (groceryName) => {
    groceryList = groceryList.map(grocery => {
        if (groceryName === grocery.name) {
            grocery.isBought = true;
        }
        return grocery;
    });
}

addProduct('Apple', 3);
addProduct('Blueberry', 5);
purchaseProduct('Kiwi');
displayGroceryList();


// 2
// An array of classrooms
let classrooms = [
    {
        name: 'Bauhaus',
        seats: 15,
        faculty: 'Design'
    },
    {
        name: 'Iron Giant',
        seats: 20,
        faculty: 'Robotics'
    },
    {
        name: 'Soyuz',
        seats: 10,
        faculty: 'Aeronautics'
    }
];

// Function for displaying all classrooms
const displayClassrooms = (classroomsArray) => {
classroomsArray.forEach(classroom => document.write(`<div class="box__classroom"><h1>${classroom.name}</h1><p>seats: ${classroom.seats}</p>faculty: ${classroom.faculty}<p></div>`));
}

const displayAllClassrooms = () => displayClassrooms(classrooms);

// Function for displaying all the classrooms for a given faculty
const displayClassroomsByFaculty = (faculty) => {
    const filteredClassrooms = classrooms.filter(classroom => classroom.faculty === faculty);
    displayClassrooms(filteredClassrooms);
};


// Function for displaying only the classrooms that would fit a given group.
const displayClassroomsByGroup = (group) => {
    const filteredClassrooms = classrooms.filter(classroom => classroom.seats >= group.students && classroom.faculty === group.faculty);
    displayClassrooms(filteredClassrooms);
}

const nerdsGroup = {
    name: 'Nerds',
    students: 12,
    faculty: 'Robotics'
};

displayAllClassrooms(); 
// displayClassroomsByFaculty('Design');
// displayClassroomsByGroup(nerdsGroup);