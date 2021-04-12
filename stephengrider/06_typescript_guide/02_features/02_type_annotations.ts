// Three examples: When to use annotations

// 1) when we have a function that returns the 'any' type

const json = '{ "x":10, "y": 20 }';
const coordinates: { x: number; y: number; } = JSON.parse(json); // TS shows 'any' type
console.log(coordinates); // { x: 10, y: 20 }

// 2) When we declare a variavle on one line and intialize it later
let words = [ 'red', 'green', 'blue'];
let foundWord: boolean;

for ( let i =0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWord = true;
  }
};

// 3) Variable whose type cannot be inferred corerctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++ ) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

