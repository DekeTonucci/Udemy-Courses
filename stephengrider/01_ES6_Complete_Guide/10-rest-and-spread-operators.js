function addNumbers(numbers) {
  return numbers.reduce((sum, number ) => sum + number, 0)
}

addNumbers([ 1,2,3,4,5])

// Dynamic version with rest operator. We are going to have some amount of 'numbers'
function addNumbers(...numbers) {
  return numbers.reduce((sum, number ) => sum + number, 0)
}

addNumbers(1,2,3,4,5)

// =================

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
// --
const fallColors = ['fire red', 'fall orange'];

// ES5 :
defaultColors.concat(userFavoriteColors);

// ES6 : Spread (Does not mutate origial arrays, creates a new array)
const allColors = [ ...defaultColors, ...userFavoriteColors ];

const allColors = [ "blue", ...defaultColors, ...userFavoriteColors, ...fallColors ];


// ============= 
// Use rest and spread operators in same example:
function validateShoppingList(...items) {
  if(items.indexOf('milk') < 0) {
    return [ 'milk', ...items ]
  }
  return items;
}

validateShoppingList('oranges', 'bread')


// ==========
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Plkease use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a,b) {
    return a * b;
  },
};


/* Coding Exercise 1 */
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
/* Soultion */
function product(...numbers) { 
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}


/* Coding Exercise 2 */
function join(array1, array2) {
  return array1.concat(array2);
}

/* Soultion */
function join(array1, array2) {
  return [ ...array1, ...array2 ]
}


/* Coding Exercise 3 */
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

/* Soultion */
function unshift(array, ...rest) {
  return [ ...rest, ...array]
}

