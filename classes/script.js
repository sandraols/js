// A class that describes a regular marker. With a metod for writing. 
// The method takes a string and displays the text in the given color on the webpage. 
// The text appears as long as the marker has ink. One non-space character takes 0,5% ink from the marker.

class Marker {
    constructor(color) {
        this.color = color;
        this.amountOfInk = 100;
    }
    write(string) {
        let newText = '';
        for (let character of string) {
            if (this.amountOfInk === 0) break; // exit the loop if there is no ink
            newText += character;
            if (character !== ' ') { // decrease the amount of ink for non-space characters
                this.amountOfInk -= 0.5;
            }
        }
        document.write(`<p style="color: ${this.color}">${newText}</p>`);
        document.write(`<p>Ink left: ${this.amountOfInk}%</p>`);
    }
    // write(string) {
    //     const stringCharacters = string.length;
    //     const amountOfWhitespace = string.split(/\s/).length - 1;
    //     const charactersUsingInk = stringCharacters - amountOfWhitespace;
    //     const amountOfInkNeeded = charactersUsingInk * 0.5;
    //     if (amountOfInkNeeded > this.amountOfInk) {
    //         const splitString = string.split('');
    //         let newString = '';
    //         let charactersPrinted = 0;
    //         splitString.forEach(char => {
    //             if (charactersPrinted < this.amountOfInk * 2) {
    //                 newString += char;
    //                 if (char != ' ') {
    //                     charactersPrinted++;
    //                 }
    //             }
    //         });
    //         document.write(`<p style="color:${this.color}">${newString}</p>`);
    //         document.write(`<p>Out of ink!</p>`);
    //         this.amountOfInk = 0;
    //     } else {
            // this.amountOfInk -= amountOfInkNeeded;
            // document.write(`<p style="color:${this.color}">${string}</p><p>Ink left: ${this.amountOfInk}%`);
        // }

    // }
}

const myMarker = new Marker('pink');
myMarker.write(`JavaScript classes introduced in ECMAScript 2015 are syntactical sugar over JavaScript's existing prototype-based inheritance.`);
myMarker.write(`JavaScript classes introduced in ECMAScript 2015 are syntactical sugar over JavaScript's existing prototype-based inheritance.`);

// A class that describes a refillable marker that extends the class Marker, 
// with a method that refills the marker to 100%.
class RefillableMarker extends Marker {
    constructor(color) {
        super(color);
    }
    refill() {
        this.amountOfInk = 100;
        document.write(`<p>Ink left: ${this.amountOfInk}%</p>`);
    }
}

const myRefillableMarker = new RefillableMarker('purple');
myRefillableMarker.write('JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. ');
myRefillableMarker.write('JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. ');
myRefillableMarker.refill();
myRefillableMarker.write('JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. ');