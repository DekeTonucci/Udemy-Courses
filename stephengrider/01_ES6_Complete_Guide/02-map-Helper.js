const numbers = [ 1, 2 ,3 ];
const doubledNumbers = [];

// For Loop Example
for ( let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2)
}

// .map Example
const doubled = numbers.map( number => {
  return number * 2
})

// .map Example #2
const cars = [
  {
    model: 'Buick',
    price: 'Cheap'
  },
  {
    model: 'Camaro',
    price: 'Expensive'
  },
]

const prices = cars.map((car) => {
  return car.price;
})

/* Coding Exercise 1 */
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

/* Solution */
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

const heights = images.map(function(image) {
  return image.height
})

/* Coding Exercise 2 */
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;
/* Solution */
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map((trip) => {
    return trip.distance / trip.time;
})

/* Coding Exercise 3 */
function pluck(array, property) {
    
}

/* Solution */
function pluck(array, property) {
  return array.map(function(obj){
      return obj[property];
  });  
}