// A class that describes a regular marker. With a metod for writing. 
// The method takes a string and displays the text in the given color on the webpage. 
// The text appears as long as the marker has ink. One non-space character takes 0,5% ink from the marker.

class Marker {
    constructor(color) {
        this.color = color;
        this.amountOfInk = 100;
    }
    write(string) {
        const stringCharacters = string.length;
        const amountOfWhitespace = string.split(/\s/).length - 1;
        const charactersUsingInk = stringCharacters - amountOfWhitespace;
        const amountOfInkUsed = charactersUsingInk * 0.5;
        this.amountOfInk -= amountOfInkUsed;

        if (amountOfInkUsed <= 100) {
            document.write(`<p style="color:${this.color}">${string}</p><p>Ink left: ${this.amountOfInk}%`);
        } else {
            document.write(`<p>Out of ink!</p>`);
        }
    }
}

const myMarker = new Marker('pink');
myMarker.write('JavaScript classes introduced in ECMAScript 2015 are syntactical sugar over JavaScript\'s existing prototype-based inheritance.');

// A class that describes a refillable marker that extends the class Marker, 
// with a method that refills the marker to 100%.
class RefillableMarker extends Marker {
    constructor(color) {
        super(color);
    }
    refill() {
        document.write(`<p>Ink left: ${this.amountOfInk = 100}%</p>`);
    }
}

const myRefillableMarker = new RefillableMarker('purple');
myRefillableMarker.write('JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.');
myRefillableMarker.refill();
