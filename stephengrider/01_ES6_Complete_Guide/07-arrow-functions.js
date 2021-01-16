// ES5 Functions
const add = function(a, b) {
  return a + b;
}
add(1,2) // = 3

// ES6 Functions
const add = (a, b) => {
  return a + b;
}
add(3,4) // = 7

// ES6 Functions ( Implicit Return Function )
const add = (a, b) => a + b;
add(3,5) // = 8

// Most compact function we can make:
const double = number => 2 * number;

/*
  const double = (number) => {
    return 2 * number
  }
*/

// Problems with lexical scoping and this
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member) { 
      return `${member} is on team ${this.teamName}`
     })
  }
}
team.teamSummary(); // Cannot read property 'teamName' of undefined

// Refactored code to solve 'teamName' of undefined using arrow function
// Convert function inside of map to arrow function
// lexical = placement of this term depends on how it is evaluated
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map((member) => { 
      return `${member} is on team ${this.teamName}`
     })
  }
}
team.teamSummary(); // Cannot read property 'teamName' of undefined





/* Coding Exercise 1 */
const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
/* Soultion */
const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


/* Coding Exercise 2 */
const profile = {
  name: 'Alex'
};

/* Soultion */
const profile = {
  name: 'Alex',
  getName() { return this.name }
};