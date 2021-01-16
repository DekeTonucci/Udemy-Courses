var numbers = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum+= numbers[i];
} // 60

numbers.reduce((sum, number) => {
  return sum + number 
}, 0) // 60

primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'},
]

primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor)
  return previous;
}, [])

// Classic whiteboard coding problem
// Balanced Parens equation 
// are these balanced: "()()()()" - Yes
// are these balanced: "()))" - No
// are these balanced: ")(" - No

function balancedParens(string) {
  // return string.split("") // Each character is an element in an array
  return !string.split("").reduce(function(prev, char) {
    if(previous<0) { return previous };
    if(char === `(` ) { return ++previous };
    if(char === `)` ) { return --previous };
    return previous;
  }, 0)
}

balancedParens("((((") // False
balancedParens("()()()()()()") // True
balancedParens(")()(") // True



/* Coding Exercise 1 */
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
var totalDistance;

/* Soultion */
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
var totalDistance = trips.reduce(function(previous, trip) {
  return previous + trip.distance;
}, 0)

/* Coding Exercise 2 */
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function() {
    
}, { sitting: 0, standing: 0 });

/* Soultion */
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(total, desk) {
  desk.type === 'sitting' ? ++total.sitting : ++total.standing;
  return total;
},{ sitting: 0, standing: 0 });

/* Coding Exercise 3 */
function unique(array) {
  
}

/* Soultion */
function unique(array) {
  return array.reduce((accumulator, item) => {
     !accumulator.find(i => i === item) ? accumulator.push(item) : accumulator
    return accumulator
  }, []);
}