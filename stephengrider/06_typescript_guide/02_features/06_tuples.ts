const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Tuple version 1:
// const pepsi: [string, boolean, number] = [ 'brown', true, 40 ];

// Tuple Version 2
type Drink = [string, boolean, number];
const pepsi: Drink = [ 'brown', true, 40 ];
const sprinte: Drink = [ 'clear', true, 40 ];
const tea: Drink = [ 'brown', false, 0 ];