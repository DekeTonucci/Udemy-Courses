let apples: number = 5;
apples = 10;
// apples = 'a string' // errors, as its no longer a number

let speed: string = 'fast';
speed = "slow";
// speed = 100; // errors, as its no longer a string

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

//arrays
// array with strings
let colors: string[] = ['red', 'green', 'blue']
let numbers: number[] = [ 1, 2, 3 ];
let truths: boolean[] = [ true, true, false];

// classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Functions
// Regular JS Function
const logNumberJS = (i) => {
  console.log(i);
}

// TS Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}